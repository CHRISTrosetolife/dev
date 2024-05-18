import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
export async function sandbox() {
  let list = await yyy8Uu_parts(index);
  await each_index_async(list, async (file_path, index) => {
    let parts = await gcloud_translate_cache("la", "en", yyy8Uu_parts.name, [
      index,
    ]);
  });
  return;
  let result = await yyy8Uu_parts(index);
  return list;
  return;
  let filtered = await yyy8Uu_file_paths();
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
