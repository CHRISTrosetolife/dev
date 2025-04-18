import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function url_bible_songs() {
  return string_combine_multiple([
    url_secure_w3(),
    "youtube.com/@JESUS_rose_to_life",
  ]);
}
