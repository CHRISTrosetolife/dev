import { string_digit_is } from "./string_digit_is.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
export function html_condition_letters_numbers_underscores_conditions() {
  return [string_letter_is, string_underscore_is, string_digit_is];
}
