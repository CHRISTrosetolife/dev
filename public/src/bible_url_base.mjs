import { bible_ebible_url } from "./bible_ebible_url.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_url_base(bible_folder) {
  return string_combine_multiple([bible_ebible_url(), bible_folder, "/"]);
}
