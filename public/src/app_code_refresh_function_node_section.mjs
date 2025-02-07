import { html_style_flex_1 } from "./html_style_flex_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_flex_row_centered } from "./html_style_flex_row_centered.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_width } from "./html_style_width.mjs";
export function app_code_refresh_function_node_section(parent, b, indent) {
  if (false) {
  }
  let section = html_div(parent);
  html_style_flex_row_centered(section);
  let left = html_div(section);
  html_style_width(left, string_combine_multiple(["1ch"]));
  parent = html_div(section);
  html_style_flex_1(parent);
  app_code_refresh_function_node(parent, b);
}
