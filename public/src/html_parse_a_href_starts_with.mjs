import { html_parse_visit_tag_attribute } from "./html_parse_visit_tag_attribute.mjs";
import { list_adder } from "./list_adder.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function html_parse_a_href_starts_with(element, prefix) {
  let q = list_adder((la) =>
    html_parse_visit_tag_attribute(element, "a[href]"),
  );
  let f2 = list_filter(q, (f) => {
    let { attribs } = f;
    return object_property_exists(attribs, "href");
  });
  let filtered = list_filter(f2, (i) => {
    let href = html_parse_href(i);
    return string_starts_with(href, prefix);
  });
  return filtered;
}
