import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_chapters(bible_folder, book_name) {
  let url_base = bible_url_base(bible_folder);
  let url = string_combine_multiple(url_base, book_name);
  let root = await html_cache_parse(url_base);
}
