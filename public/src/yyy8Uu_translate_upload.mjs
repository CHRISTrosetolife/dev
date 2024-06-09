import { function_cache_path } from "./function_cache_path.mjs";
import { list_take } from "./list_take.mjs";
import { list_remove } from "./list_remove.mjs";
import { log } from "./log.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { list_single } from "./list_single.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { list_first } from "./list_first.mjs";
import { list_length_2 } from "./list_length_2.mjs";
import { string_split_space } from "./string_split_space.mjs";
export async function yyy8Uu_translate_upload() {
  let filtered = await yyy8Uu_file_paths();
  await each_index_only_async(filtered, async (index) => {
    log({
      index,
    });
    let latin = await yyy8Uu_parts(index);
    let english = await list_adder_async(async (la) => {
      let index2 = 0;
      while (true) {
        if (0) {
          log({
            index,
            index2,
          });
        }
        try {
          let fcp = function_cache_path(yyy8Uu_part.name, [index, index2]);
        } catch (e) {
          break;
        }
        index2++;
      }
      let translateds = await gcloud_translate_cache(
        "la",
        "en",
        yyy8Uu_part.name,
        [index, index2],
      );
      let translated = list_single(translateds);
      la(translated);
    });
    let f = list_first(english);
    let f_split = string_split_space(f);
    if (list_length_2(f_split)) {
      if (list_first(f_split) === "Chapter") {
        log({
          f,
        });
        list_remove(english, f);
      }
    }
    if (0) {
      log({
        l: list_take(latin, 3),
        e: list_take(english, 3),
      });
    }
    let destination = yyy8Uu_storage_path(index);
    if (0) {
      await storage_upload_object(
        {
          english,
          latin,
        },
        destination,
      );
    }
  });
}
