import { http_cache } from "./http_cache.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function definition_bohol(word) {
  let url = string_combine_multiple([
    "https://www.bohol.ph/diksyunaryo.php?sw=",
    word,
    "&lang=English",
  ]);
  let result = await http_cache(url);
  return result;
}
