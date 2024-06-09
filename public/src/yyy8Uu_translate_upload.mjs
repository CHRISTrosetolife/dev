import { yyy8Uu_parts_english_count } from "./yyy8Uu_parts_english_count.mjs";
import { log } from "./log.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { list_single } from "./list_single.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { list_length } from "./list_length.mjs";
import { equal_not } from "./equal_not.mjs";
export async function yyy8Uu_translate_upload() {
  let filtered = await yyy8Uu_file_paths();
  await each_index_only_async(filtered, async (index) => {
    log({
      index,
    });
    let latin = await yyy8Uu_parts(index);
    let latin_length = list_length(latin);
    let english_length = await yyy8Uu_parts_english_count(index);
    if (10) {
      if (equal_not(latin_length, english_length)) {
        log({
          l: latin_length,
          e: english_length,
        });
      }
    }
    return;
    let translateds = await gcloud_translate_cache(
      "la",
      "en",
      yyy8Uu_part.name,
      [index, english_length],
    );
    let translated = list_single(translateds);
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
