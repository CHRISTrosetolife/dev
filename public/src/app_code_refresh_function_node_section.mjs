import { each } from "./each.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
export function app_code_refresh_function_node_section(parent, b, indent) {
  let section = html_div(parent);
  let left = html_span(section);
  each(list, (item) => {});
  let right = html_span(section);
  app_code_refresh_function_node(right, b, indent);
}
