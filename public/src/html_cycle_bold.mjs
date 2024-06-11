import { html_cycle_split } from "./html_cycle_split.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function html_cycle_bold(parent, message) {
  let split = html_cycle_split(message);
  html_cycle_list(parent, html_p, [noop, html_style_bold], split);
}
