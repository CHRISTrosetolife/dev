import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { sandbox_texts } from "./sandbox_texts.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
export async function sandbox() {
  return await gcloud_translate_cache("en", "es", sandbox_texts.name, ["john"]);
  let index = 0;
  let result = await yyy8Uu_parts(index);
  return result;
  return;
  let filtered = await yyy8Uu_file_paths();
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
