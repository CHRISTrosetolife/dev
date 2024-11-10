import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { tautology } from "./tautology.mjs";
export function html_parse_a_href_ends_with(element, prefix) {
  let found = html_parse_a_hrefs(element, tautology);
  let filtered = list_filter(found, (i) => {
    let href = html_parse_href(i);
    return string_starts_with(href, prefix);
  });
  return filtered;
}
