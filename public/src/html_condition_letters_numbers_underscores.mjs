import { lambda_not } from "./lambda_not.mjs";
import { list_unique } from "./list_unique.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { string_all_or } from "./string_all_or.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function html_condition_letters_numbers_underscores() {
  return {
    message: (value) =>
      string_combine_multiple([
        "contain only letters, numbers or underscores; contains: ",
        list_unique(
          list_filter(string_split_empty(value), lambda_not(valid_is)),
        ),
      ]),
    condition: function valid_is(u) {
      string_all_or(u, [
        string_letter_is,
        string_underscore_is,
        string_digit_is,
      ]);
    },
  };
}
