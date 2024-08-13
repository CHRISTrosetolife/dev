import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
import { string_exclude } from "./string_exclude.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { log } from "./log.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function bible_ceb_2_book(href) {
  log({
    href,
  });
  let chapter_name;
  let book_name;
  let root = await html_cache_parse(href);
  let body = html_parse_visit_tag_single(root, "body");
  let { children } = body;
  return list_adder((la) => {
    each(children, (c) => {
      let { type } = c;
      if (type === "tag") {
        if (c.name === "center") {
          let book_name_elements = html_parse_visit_attribute_value_list(
            c,
            "size",
            "+4",
          );
          if (list_empty_not_is(book_name_elements)) {
            let book_name_element = list_single(book_name_elements);
            book_name = html_parse_text(book_name_element);
          }
          let chapter_name_element = html_parse_visit_attribute_value_single(
            c,
            "size",
            "+2",
          );
          let chapter_name_text = html_parse_text(chapter_name_element);
          if (chapter_name_text !== "Back to Cebuano Bible Options") {
            chapter_name = string_prefix_without(chapter_name_text, "CAPITLO ");
          }
        }
      }
      if (type === "text") {
        let { data } = c;
        data = string_trim_whitespace(data);
        data = string_whitespace_normalize(data);
        let split = string_split_space(data);
        let { first: verse_number, remaining: tokens } =
          list_first_remaining(split);
        tokens = list_map(tokens, string_case_lower);
        let symbols = ["¶"];
        tokens = list_map(tokens, (t) => string_exclude(t, symbols));
        la({
          verse_number,
          tokens,
        });
      }
    });
  });
}
