import { html_cycle_short_p } from "./html_cycle_short_p.mjs";
import { html_style_function_name } from "./html_style_function_name.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_short_function_name(root, message) {
  html_cycle_short_p(root, [noop, html_style_function_name], message);
}
