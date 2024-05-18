import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { log } from "./log.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_join } from "./list_join.mjs";
export async function sandbox() {
  let index = 0;
  let parts = await gcloud_translate_cache("la", "en", yyy8Uu_parts.name, [index]);

  await file_overwrite('log.txt', list_join(parts, '\n\n'))
  return;
  let result = await yyy8Uu_parts(index);
  return result;
  return;
  let filtered = await yyy8Uu_file_paths();
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
