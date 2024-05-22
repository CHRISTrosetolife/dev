import { string_trim } from "./string_trim.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function html_parse_a_href_starts_with(parsed, prefix) {
  let q = parsed.querySelectorAll("a[href]");
  let filtered = list_filter(q, (i) => {
    let href = i.getAttribute("href");
    return string_starts_with(href, prefix);
  });
  console.log({filtered})
  let mapped = list_map(filtered, (i) => object_property_get(i, "text"));
  let mapped3 = list_map(mapped, (i) => string_trim(i));
  return mapped3;
}
