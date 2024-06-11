import { html_cycle_split } from "./html_cycle_split.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_p } from "./html_p.mjs";
export function html_cycle_short_p(parent, patterns, message) {
  let split = html_cycle_split(message);
  html_cycle_list(parent, html_p, patterns, split);
}
