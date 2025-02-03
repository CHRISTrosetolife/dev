import { list_unique } from "./list_unique.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { string_all_or } from "./string_all_or.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function html_condition_letters_numbers_underscores() {
  return {
    message: (value) => {
      let value_as_list = string_split_empty(value);
      let characters_invalid = list_filter_not(value_as_list, valid_is);
      let unique = list_unique(characters_invalid);
      return string_combine_multiple([
        "contain only letters, numbers or underscores; contains: ",
        unique,
      ]);
    },
    condition: valid_is,
  };
  function valid_is(u) {
    let requirements = [
      string_letter_is,
      string_underscore_is,
      string_digit_is,
    ];
    return string_all_or(u, requirements);
  }
}
