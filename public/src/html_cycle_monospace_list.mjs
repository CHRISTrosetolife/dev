import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
export function html_cycle_monospace_list(parent, list) {
  html_cycle_list(parent, html_p, [noop, html_style_code], list);
}
