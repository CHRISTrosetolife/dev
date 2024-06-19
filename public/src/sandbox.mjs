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
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { assert } from "./assert.mjs";
export async function sandbox() {
  let from = "ceb";
  let to = "en";
  let upload_audio = false;
  let group_index = 0;
  let limit = 150;
  let skip = 0;
  let group_count = app_language_group_size();
  let { atoms, definitions: definitions_all } =
    await ceb_bible_words_definitions_atoms(skip, limit);
  let group = list_take(atoms, group_count);
  await each_async(group, async (atom) => {
    await each_async(atom, async (a) => {
      let ceb = list_first(a);
      let en = list_second(a);
      await audio_upload(from, ceb);
      await audio_upload(to, en);
    });
  });
  let words = list_adder_unique((la) =>
    each(atoms, (a) => each(a, (pair) => la(list_first(pair)))),
  );
  let definitions = {};
  each(words, (w) => {
    let filtered = list_filter(definitions_all, (d) => d.word === w);
    let ds = list_single(filtered).definitions;
    object_property_set(definitions, w, ds);
  });
  let inverted = {};
  each_object(definitions, (word, word_definitions) =>
    each(word_definitions, (wd) => {
      let words = object_property_initialize(inverted, wd, []);
      list_add(words, word);
    }),
  );
  let result_new = {
    group,
    definitions,
    inverted,
  };
  let storage_path = app_language_group_path(from, to, group_index);
  let existing_path = folder_gitignore_path(storage_path);
  if (10) {
    if (10) {
      await storage_upload_object(result_new, storage_path);
    }
    await file_overwrite_json(existing_path, result_new);
  }
  let existing = await file_read_json(existing_path);
  assert(equal_json, [result_new, existing]);
  return group;
}
