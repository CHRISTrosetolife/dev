import { list_join_empty } from "./list_join_empty.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
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
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { each_async } from "./each_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function ceb_bible_words_2() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "talibon.com/bible/",
  ]);
  let url = string_combine_multiple([url_base, "bible.html"]);
  let root_bible = await html_cache_parse(url);
  let book_hrefs = html_parse_a_hrefs(root_bible, function condition(href) {
    return string_ends_with(href, ".html");
  });
  book_hrefs = list_map(book_hrefs, (href) => string_combine(url_base, href));
  let symbols_unique = await list_adder_unique_async(async (la) => {
    await each_async(book_hrefs, async (href) => {
      log({
        href,
      });
      let root = await html_cache_parse(href);
      let body = html_parse_visit_tag_single(root, "body");
      let { children } = body;
      each(children, (c) => {
        let { type } = c;
        if (type === "tag") {
          if (c.name === "center") {
            let { children: children_c } = c;
            let attribute_name = "size";
            let attribute_value = "+2";
            let l = html_parse_visit_attribute_value_single(
              c,
              attribute_name,
              attribute_value,
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
          let symbols = [
            "-",
            ",",
            ";",
            ":",
            "!",
            "?",
            ".",
            "'",
            '"',
            "(",
            ")",
            "¶",
            "/",
            "`",
            "|",
          ];
          tokens = list_map(tokens, (t) => {
            let split = string_split_empty(t);
            let filtered = list_filter(split, (s) =>
              list_includes_not(symbols, s),
            );
            return list_join_empty(filtered);
          });
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
