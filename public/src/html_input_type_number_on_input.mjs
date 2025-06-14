import { number_is } from "./number_is.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_input_type_number } from "./html_input_type_number.mjs";
export function html_input_type_number_on_input(
  threshold,
  threshold_value,
  threshold_min,
  on_threshold_change,
) {
  html_input_type_number(threshold);
  html_value_set(threshold, threshold_value);
  html_on_input(threshold, function () {
    let v = html_value_get(threshold);
    v = integer_parse_try(v);
    if (!number_is(v)) {
      return;
    }
    if (v < threshold_min) {
      return;
    }
    on_threshold_change(v);
  });
}
