import { each_range } from "./each_range.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_width } from "./html_style_width.mjs";
export function app_code_refresh_function_node_section(parent, b, indent) {
  indent++;
  let section = html_div(parent);
  let left = html_span(section);
  each_range(indent, () => {
    let s = html_div(left);
    html_style_width(s, "1ch");
  });
  let right = html_div(section);
  app_code_refresh_function_node(right, b, indent);
}
