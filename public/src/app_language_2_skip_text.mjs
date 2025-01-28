import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_language_2_skip_text() {
  return string_combine_multiple([emoji_delete(), " Skip"]);
}
