import { each_index_only_async } from "./each_index_only_async.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { log } from "./log.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
export async function yyy8Uu_translate() {
  let filtered = await yyy8Uu_file_paths();
  await each_index_only_async(filtered, async (index) => {
    log({
      index,
    });
    let parts = await yyy8Uu_parts(index);
    await each_index_only_async(parts, async (index2) => {
      log({
        index,
        index2,
      });
      await gcloud_translate_cache("la", "en", yyy8Uu_part.name, [
        index,
        index2,
      ]);
    });
  });
  return filtered;
}
