import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_element } from "./html_element.mjs";
export function html_table(parent) {
  let table = html_element(parent, "table");
  html_style_width_full(table);
  return table;
}
