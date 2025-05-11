import { string_ends_with } from "./string_ends_with.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { list_filter } from "./list_filter.mjs";
export function html_parse_a_href_surrounded(element, suffix) {
  let found = html_parse_a_hrefs(element);
  let filtered = list_filter(found, function (i) {
    let href = html_parse_href(i);
    let v = string_ends_with(href, suffix);
    return v;
  });
  return filtered;
}
