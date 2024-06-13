import { string_replace } from "./string_replace.mjs";
export function html_replace_nbsp(phone_number) {
  return string_replace(phone_number, " ", "&nbsp;");
}
