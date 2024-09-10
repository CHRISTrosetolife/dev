import { bible_url_htm } from "./bible_url_htm.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_copyrights() {
  await bible_eng_versions_each(async function lambda(bible_folder) {
    let url = bible_url_htm(bible_folder, "copyright");
  });
}
