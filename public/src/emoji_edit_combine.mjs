import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function emoji_edit_combine(name) {
  return string_combine_multiple(["📝 ", name]);
}
