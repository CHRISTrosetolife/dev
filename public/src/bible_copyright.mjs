import { list_any } from "./list_any.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { html_parse_outer } from "./html_parse_outer.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { string_date_is } from "./string_date_is.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
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
import { bible_url_htm } from "./bible_url_htm.mjs";
import { list_first } from "./list_first.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_copyright(bible_folder) {
  let url = bible_url_htm(bible_folder, "copyright");
  let p = await http_cache_parse_parsed(url);
  let { root, parsed } = p;
  let mains = html_parse_visit_class_list(root, "main");
  assert(list_size_2, [mains]);
  let main = list_second(mains);
  let name = html_parse_visit_tag_single(main, "h1");
  let title = html_parse_visit_tag_single(main, "h2");
  let children = html_parse_children(main);
  let filtered = list_copy(children);
  each(["h1", "h2", "div"], (tag) => {
    let tags = list_filter(children, (c) => html_parse_tag(c, tag));
    each(tags, (tag) => {
      list_remove(filtered, tag);
    });
  });
  let tnav = html_parse_visit_class_single(main, "tnav");
  list_remove(filtered, tnav);
  let filtered2 = list_filter(filtered, (f) => {
    let trimmed = string_trim_whitespace(html_parse_text(f));
    return string_empty_not_is(trimmed) && !string_date_is(trimmed);
  });
  let first = list_first(filtered2);
  let first_children = html_parse_children(first);
  let a = html_parse_visit_tag_single(main, "a");
  let texts = ["Language:", "Dialect:"];
  list_filter(first_children, list_any(string_includes(html_parse_text())));
  log({
    text: html_parse_text(first),
    first: html_parse_children(first),
  });
  return list_map(filtered2, (f) => html_parse_outer(parsed, f));
}
