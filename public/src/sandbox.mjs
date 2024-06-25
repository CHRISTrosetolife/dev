import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { list_get } from "./list_get.mjs";
import { tokens_simple } from "./tokens_simple.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_remove_multiple_at } from "./list_remove_multiple_at.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { folder_user_downloads } from "./folder_user_downloads.mjs";
import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_copy } from "./list_copy.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
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
import { object_property_get } from "./object_property_get.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
export async function sandbox() {
  let csv_path = path_join([folder_user_downloads(), "bsb_tables.csv"]);
  let csv_string = await file_read(csv_path);
  let csv_lines = string_split_newline(csv_string);
  list_remove_multiple_at(csv_lines, 0, 2);
  each(csv_lines, (line) => {
    let t = tokens_simple(line, '"', ",");
    let word = list_get(t, 5);
    let transliteration = list_get(t, 7);
    let strong = list_get(t, 10);
    log({
      word,
      transliteration,
      strong,
      t,
    });
    exit();
  });
  return;
  list_map(csv_lines, (line) => {
    let split = string_split_empty(input);
    let quoted = false;
    each(split, (s) => {});
    return;
  });
  return;
  let from = "ceb";
  let to = "en";
  let audio_upload_run = true;
  let group_upload = true;
  let group_local_save = true;
  let group_local_compare_to_new = false;
  let group_index = 0;
  let limit = 150;
  let skip = 0;
  let group_count = app_language_group_size();
  let { atoms, definitions: definitions_list } =
    await ceb_bible_words_definitions_atoms(skip, limit);
  let definitions_all = list_to_lookup_key_value_property(
    definitions_list,
    "word",
    "definitions",
  );
  let definitions_all_inverted = object_list_invert(definitions_all);
  let profiles = [
    {
      definitions: definitions_all,
      from,
      to,
      invert: false,
    },
    {
      definitions: definitions_all_inverted,
      to: from,
      from: to,
      invert: true,
    },
  ];
  await each_async(profiles, async (profile) => {
    let group = list_copy(list_take(atoms, group_count));
    await each_async(group, async (atom) => {
      await each_async(atom, async (pair) => {
        if (profile.invert) {
          list_reverse(pair);
        }
        let b = list_first(pair);
        if (audio_upload_run) {
          await audio_upload(profile.from, b);
        }
      });
    });
    let words = list_adder_unique((la) =>
      each(group, (a) =>
        each(a, (pair) => {
          la(list_first(pair));
        }),
      ),
    );
    let definitions = {};
    each(words, (w) => {
      let ds = object_property_get(profile.definitions, w);
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
