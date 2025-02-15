import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_button } from "./html_button.mjs";
export function app_weights() {
  let root = html_style_default_initialize();
  let add_weight_text = "Add available weight";
  let add_weight = html_input_width_full_placeholder(root, add_weight_text);
  html_button(root, add_weight_text, function () {});
  let weights = [];
}
