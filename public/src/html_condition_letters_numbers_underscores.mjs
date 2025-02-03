import { characters_invalid_unique } from "./characters_invalid_unique.mjs";
import { lambda_not } from "./lambda_not.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { string_all_or } from "./string_all_or.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function html_condition_letters_numbers_underscores() {
  return {
    message: (value) => {
      let value_as_list = string_split_empty(value);
      let characters_invalid = list_filter(value_as_list, lambda_not(valid_is));
      return string_combine_multiple([
        "contain only letters, numbers or underscores; contains: ",
        characters_invalid_unique(characters_invalid),
      ]);
    },
    condition: valid_is,
  };
  function valid_is(u) {
    string_all_or(u, [string_letter_is, string_underscore_is, string_digit_is]);
  }
}
