import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { html_parse_visit_tag_names } from "./html_parse_visit_tag_names.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_trim } from "./string_trim.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_single } from "./list_single.mjs";
import { list_length } from "./list_length.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { html_parse } from "./html_parse.mjs";
import { file_read } from "./file_read.mjs";
import { list_get } from "./list_get.mjs";
export async function yyy8Uu_file_path_to_parts(file_path, index) {
  let f = list_get(file_path, index);
  let input_string = await file_read(f);
  let parsed = html_parse(input_string);
  let teis = html_parse_visit_tag_list(parsed, "tei");
  log({
    teis,
  });
  assert(equal, [list_length(teis), 1]);
  let teis_single = list_single(teis);
  let s = html_parse_visit_tag_single(teis_single, "text");
  log({
    a: html_parse_visit_tag_names(teis_single),
    b: s.children,
  });
  let bodies = html_parse_visit_tag_list(teis_single, "body");
  assert(equal, [list_length(bodies), 1]);
  let divs = html_parse_visit_tag_list(list_single(bodies), "div");
  assert(equal, [list_length(divs), 1]);
  let div = list_single(divs);
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
