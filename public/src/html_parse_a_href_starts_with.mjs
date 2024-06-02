import { error } from "./error.mjs";
import { list_to } from "./list_to.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { log } from "./log.mjs";
export function html_parse_a_href_starts_with(parsed, element, prefix) {
  assert_arguments_length(arguments, 3);
  let p = parsed(element);
  log({
    e: element("a[href"),
  });
  error();
  let q = list_to(p("a"));
  let f2 = list_filter(q, (f) => object_property_exists(f.attrs, "href"));
  let filtered = list_filter(f2, (i) => {
    let href = html_parse_href(i);
    return string_starts_with(href, prefix);
  });
  return filtered;
}
