import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { html_value_set } from "./html_value_set.mjs";
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
  html_value_set(t, value_before);
  html_on_input_value(t, function (value_new) {
    storage_local_set(fn, key, value_new);
  });
  let v = t;
  return v;
}
