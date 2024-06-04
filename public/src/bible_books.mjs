import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
export async function bible_books() {
  let url_base = bible_url_base(bible_folder);
  let root = await html_cache_parse(url_base);
}
