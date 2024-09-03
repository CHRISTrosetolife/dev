import { file_html_parse } from "./file_html_parse.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { list_map } from "./list_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_single } from "./list_single.mjs";
export async function yyy8Uu_file_path_to_parts(file_path, index) {
  let f = list_get(file_path, index);
  let parsed = await file_html_parse(f);
  let tei = html_parse_visit_tag_single(parsed, "tei");
  let text = html_parse_visit_tag_single(tei, "text");
  let { children: children_text } = text;
  let div = list_single(
    list_filter(children_text, (c) => c.type === "tag" && c.name === "div"),
  );
  let { children } = div;
  let parts = list_map(children, (c) => html_parse_text(c));
  let normalized = list_map(parts, string_whitespace_normalize);
  let trimmed = list_map(normalized, string_trim_whitespace);
  let non_empty = list_filter(trimmed, string_empty_not_is);
  let mapped = list_map(non_empty, (p) => string_replace(p, "&amp;", "&"));
  for (let part of mapped) {
    if (0) {
      if (part.match(/.*&[a-z]+;.*/g)) {
        log(file_path);
        log(part);
        error();
      }
    }
  }
  return mapped;
}
