import { string_delimit_generic } from "./string_delimit_generic.mjs";
export function string_delimit_double(input) {
  return string_delimit_generic("'", input);
}
