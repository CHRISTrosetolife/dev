import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function html_parse_a_href_starts_with(parsed, prefix) {
  let q = parsed.querySelectorAll("a[href]");
  let filtered = list_filter(q, (i) => {
    let href = i.getAttribute("href");
    return string_starts_with(href, prefix);
  });
  return filtered;
}
