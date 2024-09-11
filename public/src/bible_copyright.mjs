import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_copy } from "./list_copy.mjs";
import { html_parse_tag } from "./html_parse_tag.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { list_second } from "./list_second.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { assert } from "./assert.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_htm } from "./bible_url_htm.mjs";
export async function bible_copyright(bible_folder) {
  let url = bible_url_htm(bible_folder, "copyright");
  let root = await html_cache_parse(url);
  let mains = html_parse_visit_class_list(root, "main");
  assert(list_size_2, [mains]);
  let main = list_second(mains);
  let name = html_parse_visit_tag_single(main, "h1");
  let title = html_parse_visit_tag_single(main, "h2");
  let children = html_parse_children(main);
  let filtered = list_copy(children);
  each(["h1", "h2", "div", "ul"], (tag) => {
    let tags = list_filter(children, (c) => html_parse_tag(c, tag));
    each(tags, (tag) => {
      list_remove(filtered, tag);
    });
  });
  log({
    filtered,
  });
  return list_map(filtered, html_parse_text);
}
