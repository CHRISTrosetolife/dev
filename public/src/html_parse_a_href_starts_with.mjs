import { log } from "./log.mjs";
import { list_to } from "./list_to.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_parse_a_href_starts_with(parsed, element, prefix) {
  assert_arguments_length(arguments, 3);
  let q = list_to(parsed(element).find("a[href]"));
  log({
    q,
  });
  let filtered = list_filter(q, (i) => {
    let href = html_parse_href(i);
    return string_starts_with(href, prefix);
  });
  return filtered;
}
