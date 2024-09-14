import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_url_base(bible_folder) {
  return string_combine_multiple([bible_ebible_url_combine(bible_folder), "/"]);
}
