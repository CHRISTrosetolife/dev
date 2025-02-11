import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function definition_bohol_http_parse(word) {
  let url = string_combine_multiple([
    "https://www.bohol.ph/diksyunaryo.php?sw=",
    word,
    "&lang=English",
  ]);
  let result = await html_cache_parse(url);
  return result;
}
