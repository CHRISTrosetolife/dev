import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_delete_all } from "./object_property_delete_all.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_any } from "./list_any.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { html_parse_outer } from "./html_parse_outer.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { string_date_is } from "./string_date_is.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_remove } from "./list_remove.mjs";
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
import { string_includes } from "./string_includes.mjs";
export async function bible_copyright(bible_folder) {
  let url = bible_url_htm(bible_folder, "copyright");
  let p = await http_cache_parse_parsed(url);
  let { root, parsed } = p;
  let mains = html_parse_visit_class_list(root, "main");
  assert(list_size_2, [mains]);
  let main = list_second(mains);
  let { attribs } = main;
  object_property_delete_all(attribs);
  let name_tag = html_parse_visit_tag_single(main, "h1");
  let name = html_parse_text(name_tag);
  let h2s = html_parse_visit_tag_list(main, "h2");
  let mapped = list_map(h2s, html_parse_text);
  let description = list_join_space(mapped);
  let children = html_parse_children(main);
  each(["h1", "h2", "div"], (tag) => {
    let tags = list_filter(children, (c) => html_parse_tag(c, tag));
    list_remove_multiple(children, tags);
  });
  let tnav = html_parse_visit_class_single(main, "tnav");
  list_remove(children, tnav);
  let filtered = list_filter(children, (f) => {
    let trimmed = string_trim_whitespace(html_parse_text(f));
    return string_empty_not_is(trimmed) && !string_date_is(trimmed);
  });
  each(filtered, (f) => {
    let as = html_parse_visit_tag_list(f, "a");
    let languages = list_filter(as, (a) => {
      let { attribs } = a;
      let { href } = attribs;
      return string_includes(href, "ethnologue.org");
    });
    let first_children = html_parse_children(f);
    list_remove_multiple(first_children, languages);
    let texts = ["Language:", "Dialect:"];
    let filtered3 = list_filter(first_children, (c) =>
      list_any(texts, (t) => string_includes(html_parse_text(c), t)),
    );
    list_remove_multiple(first_children, filtered3);
  });
  let copyright = html_parse_outer(parsed, main);
  return {
    name,
    description,
    copyright,
  };
}
