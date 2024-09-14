import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_url_base(bible_folder) {
  return string_combine_multiple([
    string_combine_multiple([url_secure(), "ebible.org/"]),
    bible_folder,
    "/",
  ]);
}
