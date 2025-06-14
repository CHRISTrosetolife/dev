import { html_input_type_number_on_input } from "./html_input_type_number_on_input.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function html_input_width_full_placeholder_storage_local(
  fn,
  root,
  key,
  placeholder,
  value_initial,
) {
  let t = html_input_width_full_placeholder(root, placeholder);
  let value_before = storage_local_initialize(fn, key, value_initial);
  html_input_type_number_on_input(
    t,
    value_before,
    1,
    function on_threshold_change(value_new) {
      storage_local_set(fn, key, value_new);
    },
  );
  let v = t;
  return v;
}
