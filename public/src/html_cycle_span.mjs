import { html_cycle_split } from "./html_cycle_split.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_span } from "./html_span.mjs";
export function html_cycle_span(parent, patterns, message) {
  let split = html_cycle_split(message);
  html_cycle_list(parent, html_span, patterns, split);
}
