import { app_language_upload_audio } from "./app_language_upload_audio.mjs";
import { app_language_upload_result } from "./app_language_upload_result.mjs";
import { bible_words_definitions_atoms_cache } from "./bible_words_definitions_atoms_cache.mjs";
import { list_take } from "./list_take.mjs";
import { list_last_nested } from "./list_last_nested.mjs";
import { list_first_nested } from "./list_first_nested.mjs";
import { app_language_group_upload } from "./app_language_group_upload.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { each_async } from "./each_async.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
export async function app_language_upload(from) {
  let to = "en";
  let audio_only = false;
  let audio_upload_run = false;
  let index_only = false;
  let group_upload = true;
  let group_local_compare_to_new = false;
  let group_count = app_language_group_size();
  let { atoms, definitions, inverted } =
    await bible_words_definitions_atoms_cache(from);
  let groups = list_chunk(atoms, group_count);
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
      if (index_only) {
        return;
      }
      if (audio_upload_run) {
        await app_language_upload_audio(group, profile.from);
      }
      if (audio_only) {
        return;
      }
      let result_new = app_language_upload_result(group, profile);
      log({
        result_new,
      });
      if (group_upload) {
        let existing_path = await app_language_group_upload(
          profile,
          group_index,
          result_new,
        );
        if (group_local_compare_to_new) {
          let existing = await file_read_json(existing_path);
          assert(equal_json, [result_new, existing]);
          return group;
        }
      }
    });
    if (false) {
      groups = list_take(groups, 4);
    }
    log({
      groups,
    });
    await app_language_group_upload(profile, "index", {
      groups: list_map(groups, (g) => ({
        first: list_first_nested(g),
        last: list_last_nested(g),
      })),
    });
  });
}
