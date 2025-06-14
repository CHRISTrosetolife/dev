import { storage_local_set } from "./storage_local_set.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { html_textarea_width_full_placeholder } from "./html_textarea_width_full_placeholder.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_pray_catholic_bishops } from "./app_pray_catholic_bishops.mjs";
export function app_pray_catholic_bishops_settings(root) {
  let fn = app_pray_catholic_bishops;
  html_clear_scroll_top(root);
  let key = "name_each_before";
  let value_initial = prayers_sabbw("");
  let placeholder = "Text to display before each name";
  let t = html_textarea_width_full_placeholder(root, placeholder);
  let value_before = storage_local_initialize(fn, key, value_initial);
  html_value_set(t, value_before);
  html_on_input_value(t, function (value_new) {
    storage_local_set(fn, key, value_new);
  });
}
