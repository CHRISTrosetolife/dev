import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_words_language_rename() {
  let prefix = string_combine_multiple([fn_name("bible_words_language"), "_"]);
}
