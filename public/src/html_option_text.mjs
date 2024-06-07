import { html_inner_set } from "./html_inner_set.mjs";
import { html_option } from "./html_option.mjs";
export function html_option_text(select, fn) {
  let o = html_option(select);
  html_inner_set(o, fn);
}
