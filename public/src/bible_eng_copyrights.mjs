import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { bible_copyright } from "./bible_copyright.mjs";
import { log } from "./log.mjs";
export async function bible_eng_copyrights() {
  await list_map_async(
    bible_eng_versions(),
    async function lambda(bible_folder) {
      log({
        bible_folder,
      });
      let c = await bible_copyright(bible_folder);
      log({
        c,
      });
      return c;
    },
  );
}
