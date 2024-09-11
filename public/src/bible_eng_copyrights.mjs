import { bible_copyright } from "./bible_copyright.mjs";
import { log } from "./log.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_copyrights() {
  await bible_eng_versions_each(async function lambda(bible_folder) {
    log({
      bible_folder,
    });
    let c = await bible_copyright(bible_folder);
    log({
      c,
    });
  });
}
