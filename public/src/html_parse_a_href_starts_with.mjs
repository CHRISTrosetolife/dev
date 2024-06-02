import { html_parse_visit_tag_attribute } from "./html_parse_visit_tag_attribute.mjs";
import { list_adder } from "./list_adder.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function html_parse_a_href_starts_with(element, prefix) {
  let found = list_adder((la) =>
    html_parse_visit_tag_attribute(element, "a", "href", (v) => {
      let { node } = v;
      la(node);
    }),
  );
  let filtered = list_filter(found, (i) => {
    let href = html_parse_href(i);
    return string_starts_with(href, prefix);
  });
  return filtered;
}
