import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_div } from "./html_div.mjs";
export async function app_code_refresh_function_node_section(parent, b) {
  let section = html_div(parent);
  await app_code_refresh_function_node(section, b);
}
