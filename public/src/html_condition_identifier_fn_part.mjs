import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
export function html_condition_identifier_fn_part() {
  return [
    html_condition_empty_not(),
    html_condition_letters_numbers_underscores(),
  ];
}
