import { string_split } from "./string_split.mjs";
export function html_style_alternate_split(message) {
  return string_split(message, "`");
}
