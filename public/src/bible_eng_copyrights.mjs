import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { log } from "./log.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_htm } from "./bible_url_htm.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_copyrights() {
  await bible_eng_versions_each(async function lambda(bible_folder) {
    log({
      bible_folder,
    });
    let url = bible_url_htm(bible_folder, "copyright");
    let root = await html_cache_parse(url);
    html_parse_visit_class_list(root);
  });
}
