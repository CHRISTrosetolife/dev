import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { http_cache } from "./http_cache.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_trim } from "./string_trim.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let html = await http_cache(url);
  let parsed = html_parse(html);
  let q = parsed.querySelectorAll("a[href]");
  let filtered = list_filter(q, (i) => {
    let href = i.getAttribute("href");
      const prefix = "http://www.binisaya.com/english/";
    return string_starts_with(href, prefix);
  });
  let mapped = list_map(filtered, (i) => object_property_get(i, "text"));
  let mapped3 = list_map(mapped, (i) => string_trim(i));
  let u = list_unique(mapped3);
  return u;
}
