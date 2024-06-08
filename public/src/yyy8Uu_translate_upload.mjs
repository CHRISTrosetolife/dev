import { list_remove } from "./list_remove.mjs";
import { string_split } from "./string_split.mjs";
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
export async function yyy8Uu_translate_upload() {
  let filtered = await yyy8Uu_file_paths();
  await each_index_only_async(filtered, async (index) => {
    log({
      index,
    });
    let latin = await yyy8Uu_parts(index);
    let english = await list_adder_async(async (la) => {
      await each_index_only_async(latin, async (index2) => {
        log({
          index,
          index2,
        });
        let translateds = await gcloud_translate_cache(
          "la",
          "en",
          yyy8Uu_part.name,
          [index, index2],
        );
        let translated = list_single(translateds);
        la(translated);
      });
    });
    let f = list_first(english);
    let f_split = string_split(f);
    if (list_length_2(f_split)) {
      if (list_first(f_split) === "Chapter") {
        list_remove(english, f);
      }
    }
    log({
      l: list_first(latin),
      e: list_first(english),
    });
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
