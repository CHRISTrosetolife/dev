import { bible_ebible_url } from "./bible_ebible_url.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_ebible_url_combine(combine_with) {
  return string_combine_multiple([bible_ebible_url(), combine_with]);
}
