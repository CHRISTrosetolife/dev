import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_ceb_4_url_base() {
  return string_combine_multiple([
    url_secure_w3(),
    "wordproject.org/bibles/ceb/",
  ]);
}
