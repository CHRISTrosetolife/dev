import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { bible_file_html_parse } from "./bible_file_html_parse.mjs";
import { list_map } from "./list_map.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function bible_chapters(bible_folder, book_name) {
  assert_arguments_length(arguments, 2);
  let extension = ".htm";
  let root = await bible_file_html_parse(bible_folder, book_name);
  let hrefs = html_parse_a_hrefs(root, condition);
  function condition(href) {
    if (string_starts_with(href, book_name)) {
      let without = string_prefix_without(href, book_name);
      without = string_suffix_without(without, extension);
      let i = integer_parse(without);
      if (i !== 0) {
        return true;
      }
    }
    return false;
  }
  return list_map(hrefs, (h) => string_suffix_without(h, extension));
}
