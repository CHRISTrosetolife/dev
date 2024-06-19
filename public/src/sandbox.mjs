import { list_to_lookup_value_property } from "./list_to_lookup_value_property.mjs";
import { list_find } from "./list_find.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { list_second } from "./list_second.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { equal_json } from "./equal_json.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { each_async } from "./each_async.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert } from "./assert.mjs";
export async function sandbox() {
  let from = "ceb";
  let to = "en";
  let audio_upload = false;
  let group_upload = true;
  let group_local_save = true;
  let group_local_compare_to_new = false;
  let group_index = 0;
  let limit = 150;
  let skip = 0;
  let group_count = app_language_group_size();
  let { atoms, definitions: definitions_list } =
    await ceb_bible_words_definitions_atoms(skip, limit);
  let definitions_all = list_to_lookup_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  let group = list_take(atoms, group_count);
  await each_async(group, async (atom) => {
    await each_async(atom, async (a) => {
      let ceb = list_first(a);
      let en = list_second(a);
      if (audio_upload) {
        await audio_upload(from, ceb);
        await audio_upload(to, en);
      }
    });
  });
  let profiles = [
    {
      pair_word_get: list_first,
      definitions_get: (w) =>
        list_find(definitions_list, (d) => d.word === w).definitions,
      from,
      to,
    },
    {
      pair_word_get: list_second,
      to: from,
      from: to,
    },
  ];
  await each_async(profiles, async (profile) => {
    let words = list_adder_unique((la) =>
      each(atoms, (a) => each(a, (pair) => la(profile.pair_word_get(pair)))),
    );
    let definitions = {};
    each(words, (w) => {
      let ds = profile.definitions_get(w);
      object_property_set(definitions, w, ds);
    });
    let inverted = object_list_invert(definitions);
    let result_new = {
      group,
      definitions,
      inverted,
    };
    let storage_path = app_language_group_path(
      profile.from,
      profile.to,
      group_index,
    );
    let existing_path = folder_gitignore_path(storage_path);
    if (group_upload) {
      await storage_upload_object(result_new, storage_path);
    }
    if (group_local_save) {
      await file_overwrite_json(existing_path, result_new);
    }
    if (group_local_compare_to_new) {
      let existing = await file_read_json(existing_path);
      assert(equal_json, [result_new, existing]);
      return group;
    }
  });
}
