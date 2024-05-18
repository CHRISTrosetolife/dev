import { list_adder_async } from "./list_adder_async.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { log } from "./log.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
export async function sandbox() {
  for (let index of [0, 1]) {
    let parts = await yyy8Uu_parts(index);
    let list = await list_adder_async(async (la) => {
      await each_index_async(parts, async (part, index2) => {
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
  }
  return;
  let filtered = await yyy8Uu_file_paths();
  await each_index_async(filtered, async (file_path, index) => {
    log({
      index,
    });
    let parts = await yyy8Uu_parts(index);
    await each_index_async(parts, async (part, index2) => {
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
  return;
  let result = await yyy8Uu_parts(index);
  return list;
  return;
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
