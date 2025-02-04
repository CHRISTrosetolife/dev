import { html_condition_letters_numbers_underscores_conditions } from "./html_condition_letters_numbers_underscores_conditions.mjs";
import { html_condition_string } from "./html_condition_string.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function html_condition_letters_numbers_underscores_spaces() {
  return html_condition_string(
    "letters, numbers or underscores",
    list_concat_multiple([
      html_condition_letters_numbers_underscores_conditions(),
      [string_space_is], 
    ]),
  );
}
