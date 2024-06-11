import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_li } from "./html_li.mjs";
export function html_cycle_code_li_list(parent, list) {
  html_cycle_list(parent, html_li, [noop, html_style_code], list);
}
