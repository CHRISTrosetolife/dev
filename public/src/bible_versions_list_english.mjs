import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
export async function bible_versions_list_english() {
  let url = bible_ebible_url_combine("download.php");
  let root = await html_cache_parse(url);
}
