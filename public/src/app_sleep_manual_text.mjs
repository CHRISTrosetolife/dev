import { emoji_add } from "./emoji_add.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_sleep_manual_text() {
  return string_combine_multiple([emoji_add(), " add manual"]);
}
