import { path_dirname } from "./path_dirname.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { folder_read } from "./folder_read.mjs";
import { yyy8Uu_path_base } from "./yyy8Uu_path_base.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { log } from "./log.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { list_single } from "./list_single.mjs";
import { list_first } from "./list_first.mjs";
import { string_combine } from "./string_combine.mjs";
export async function sandbox() {
  let folder_path = yyy8Uu_path_base();
  let symlinks = await folder_read(string_combine(folder_path, "symlinks"), "");
  return await list_map_async(symlinks, async (s) => {
    let dirname = path_dirname(s);
    return dirname;
  });
  return symlinks;
  let firsts = await list_adder_async(async (la_outer) => {
    for (let index of [2, 3, 4, 5, 6]) {
      let latin = await yyy8Uu_parts(index);
      let english = await list_adder_async(async (la) => {
        await each_index_async(latin, async (part, index2) => {
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
      la_outer(list_first(english));
      if (false) {
        let destination = yyy8Uu_storage_path(index);
        await storage_upload_object(
          {
            english,
            latin,
          },
          destination,
        );
      }
    }
  });
  return firsts;
  let destination = yyy8Uu_storage_path("index");
  await storage_upload_object(
    {
      firsts,
    },
    destination,
  );
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
