import { emoji_add } from "./emoji_add.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_button_add_text(after) {
  return string_combine_multiple([emoji_add(), " Add ", after]);
}
