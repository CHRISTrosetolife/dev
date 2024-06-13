import { string_replace } from "./string_replace.mjs";
export function html_replace_nbsp(s) {
  s = string_replace(s, " ", "&nbsp;");
  s = string_replace(s, "-", "&#8209;");
  return s;
}
