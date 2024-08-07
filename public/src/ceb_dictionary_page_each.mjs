import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { html_parse_a_href_starts_with_text } from "./html_parse_a_href_starts_with_text.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { string_to } from "./string_to.mjs";
import { add_1 } from "./add_1.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function ceb_dictionary_page_each(lambda) {
  let letters = keyboard_keys_sorted();
  for (let letter of letters) {
    let page_number = 1;
    while (true) {
      let prefix = `${url_secure_w3()}learnentry.com/english-to-cebuano/dictionary/words-start-with-${letter}?page=`;
      let url = string_combine_multiple([prefix, page_number]);
      let parsed = await html_cache_parse(url);
      let v = {
        url,
        letter,
        page_number,
        parsed,
      };
      lambda(v);
      let mapped3 = html_parse_a_href_starts_with_text(parsed, prefix);
      page_number = add_1(page_number);
      let page_number_string = string_to(page_number);
      if (not(list_includes(mapped3, page_number_string))) {
        break;
      }
    }
  }
}
