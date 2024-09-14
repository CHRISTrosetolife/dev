import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_ebible_url() {
  return string_combine_multiple([url_secure(), "ebible.org/"]);
}
