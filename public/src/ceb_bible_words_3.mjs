import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function ceb_bible_words_3() {
  let url_base = string_combine_multiple([
    url_secure_w3(),
    "talibon.com/bible/",
  ]);
}
