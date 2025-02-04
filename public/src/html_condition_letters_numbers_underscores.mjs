import { html_condition_letters_numbers_underscores_conditions } from "./html_condition_letters_numbers_underscores_conditions.mjs";
import { html_condition_string } from "./html_condition_string.mjs";
export function html_condition_letters_numbers_underscores() {
  return html_condition_string(
    "letters, numbers or underscores",
    html_condition_letters_numbers_underscores_conditions(),
  );
}
