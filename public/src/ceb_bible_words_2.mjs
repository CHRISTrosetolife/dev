import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { string_exclude } from "./string_exclude.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_trim } from "./string_trim.mjs";
import { html_parse_visit_attribute_value_single } from "./html_parse_visit_attribute_value_single.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { log } from "./log.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function ceb_bible_words_2() {
  let book_hrefs = await bible_ceb_2_books_hrefs();
  let symbols_unique = await list_adder_unique_async(async (la) => {
    await each_async(book_hrefs, async (href) => {
      log({
        href,
      });
      let chapter_name;
      let book_name;
      let root = await html_cache_parse(href);
      let body = html_parse_visit_tag_single(root, "body");
      let { children } = body;
      each(children, (c) => {
        let { type } = c;
        if (type === "tag") {
          if (c.name === "center") {
            let book_name_element = html_parse_visit_attribute_value_single(
              c,
              "size",
              "+4",
            );
            book_name = html_parse_text(book_name_element);
            let chapter_name_element = html_parse_visit_attribute_value_single(
              c,
              "size",
              "+2",
            );
            chapter_name = string_prefix_without(
              html_parse_text(chapter_name_element),
              "CAPITLO ",
            );
          }
        }
        if (type === "text") {
          let { data } = c;
          data = string_trim(data);
          data = string_whitespace_normalize(data);
          let split = string_split_space(data);
          let { first: verse_number, remaining: tokens } =
            list_first_remaining(split);
          tokens = list_map(tokens, string_case_lower);
          let symbols = ["¶"];
          tokens = list_map(tokens, (t) => string_exclude(t, symbols));
          each(tokens, (t) =>
            each(string_symbols(t), (s) => {
              la(s);
            }),
          );
          if (0) {
            log({
              verse_number,
              tokens,
            });
          }
        }
      });
    });
  });
  list_sort_string(symbols_unique, identity);
  log({
    symbols_unique,
  });
  return;
  let mapped = string_count_words(text_split);
  return mapped;
}
