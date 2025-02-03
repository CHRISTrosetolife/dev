import { string_digit_is } from "./string_digit_is.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { string_all_or } from "./string_all_or.mjs";
export function html_condition_letters_numbers_underscores() {
  return {
    message: (value) => "contain only letters, numbers or underscores",
    condition: function valid_is(u) {
      string_all_or(u, [
        string_letter_is,
        string_underscore_is,
        string_digit_is,
      ]);
    },
  };
}
