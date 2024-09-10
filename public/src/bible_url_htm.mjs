import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
export function bible_url_htm(bible_folder, book_name) {
  let url_base = bible_url_base(bible_folder);
  let extension = ".htm";
  let url = string_combine_multiple([url_base, book_name, extension]);
  return url;
}
