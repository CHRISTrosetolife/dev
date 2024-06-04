import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
import { list_remove } from "./list_remove.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
export async function bible_books(bible_folder) {
  let url_base = bible_url_base(bible_folder);
  let root = await html_cache_parse(url_base);
  html_parse_visit_attribute_value(root, "class", "vnav", (v) => {
    let { node } = v;
    let { parent } = node;
    let { children } = parent;
    list_remove(children, node);
  });
  let verses_ceb = html_parse_visit_attribute_value_list(
    parsed_ceb,
    "class",
    "vnav",
  );
}
