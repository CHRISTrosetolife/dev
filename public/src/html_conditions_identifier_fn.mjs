import { html_condition_number_starts_with_not } from "./html_condition_number_starts_with_not.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { list_concat } from "./list_concat.mjs";
export function html_conditions_identifier_fn() {
  let v = list_concat(html_condition_identifier_fn_part(), [
    html_condition_number_starts_with_not(),
  ]);
  return v;
}
