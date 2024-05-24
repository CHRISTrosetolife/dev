import { string_delimit_generic } from "./string_delimit_generic.mjs";
export function string_delimit_backtick(input) {
  return string_delimit_generic("'", input);
}
