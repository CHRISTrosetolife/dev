import { html_cycle_split } from "./html_cycle_split.mjs";
import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_p } from "./html_p.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_cycle_p(parent, patterns, message) {
  assert_arguments_length(arguments, 3);
  let split = html_cycle_split(message);
  html_cycle_list(parent, html_p, patterns, split);
}
