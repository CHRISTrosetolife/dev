import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_trim } from "./string_trim.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse } from "./html_parse.mjs";
import { file_read } from "./file_read.mjs";
import { list_get } from "./list_get.mjs";
export async function yyy8Uu_file_path_to_parts(file_path, index) {
  let f = list_get(file_path, index);
  let input_string = await file_read(f);
  let parsed = html_parse(input_string);
  let tei = html_parse_visit_tag_single(parsed, "tei");
  let text = html_parse_visit_tag_single(tei, "text");
  let div = html_parse_visit_tag_single(text, "div");
  let { childNodes } = div;
  let parts = list_map(childNodes, (c) => object_property_get(c, "rawText"));
  let normalized = list_map(parts, string_whitespace_normalize);
  let trimmed = list_map(normalized, string_trim);
  let non_empty = list_filter(trimmed, string_empty_not_is);
  let mapped = list_map(non_empty, (p) => string_replace(p, "&amp;", "&"));
  for (let part of mapped) {
    if (0)
      if (part.match(/.*&[a-z]+;.*/g)) {
        log(file_path);
        log(part);
        error();
      }
  }
  return mapped;
}
