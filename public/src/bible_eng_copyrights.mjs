import { object_merge } from "./object_merge.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { bible_copyright } from "./bible_copyright.mjs";
import { log } from "./log.mjs";
export async function bible_eng_copyrights() {
  let copyrights = {};
  let mapped = await list_map_async(
    bible_eng_versions(),
    async function lambda(bible_folder) {
      log({
        bible_folder,
      });
      let c = await bible_copyright(bible_folder);
      object_merge(c, {
        bible_folder,
      });
      return c;
    },
  );
  return mapped;
}
