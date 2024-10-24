import { string_replace } from "./string_replace.mjs";
export function string_replace_nb(s, before) {
  return string_replace(s, before, "&nbsp;");
}
