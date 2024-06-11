import { html_cycle_split } from "./html_cycle_split.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
export function html_cycle(parent, create, patterns, message) {
  let split = html_cycle_split(message);
  html_cycle_list(parent, create, patterns, split);
}
