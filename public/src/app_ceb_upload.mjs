import { each_index_async } from "./each_index_async.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { promise_all } from "./promise_all.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { each_async } from "./each_async.mjs";
import { object_list_invert } from "./object_list_invert.mjs";
import { list_take } from "./list_take.mjs";
import { ceb_bible_words_definitions_atoms } from "./ceb_bible_words_definitions_atoms.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
export async function app_ceb_upload() {
  try {
    let from = "ceb";
    let to = "en";
    let audio_only = false;
    let audio_upload_run = true;
    let group_upload = true;
    let group_local_save = true;
    let group_local_compare_to_new = false;
    let group_count = app_language_group_size();
    let { atoms, definitions, inverted } =
      await ceb_bible_words_definitions_atoms();
    let groups = list_chunk(atoms, group_count);
    if (10) {
      groups = list_take(groups, 2);
    }
    let profiles = [
      {
        definitions,
        from,
        to,
        invert: false,
      },
      {
        definitions: inverted,
        to: from,
        from: to,
        invert: true,
      },
    ];
    await each_async(profiles, async (profile) => {
      await each_index_async(groups, async (group, group_index) => {
        await each_async(group, async (atom) => {
          await each_async(atom, async (pair) => {
            if (profile.invert) {
              list_reverse(pair);
            }
          });
        });
        await each_async(list_chunk(group, 20), async (chunk) => {
          let mapped = list_map(chunk, async (atom) => {
            await each_async(atom, async (pair) => {
              let b = list_first(pair);
              if (audio_upload_run) {
                await audio_upload(profile.from, b);
              }
            });
          });
          await promise_all(mapped);
          log("chunk finished");
        });
        if (audio_only) {
          return;
        }
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
          log({
            existing_path,
          });
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
    });
  } catch (e) {
    await app_ceb_upload();
  }
}
