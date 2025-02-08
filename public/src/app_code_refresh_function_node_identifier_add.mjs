import { html_on_click } from "./html_on_click.mjs";
import { html_code_identifier } from "./html_code_identifier.mjs";
import { app_code_refresh_function_node_identifier_add_generic } from "./app_code_refresh_function_node_identifier_add_generic.mjs";
export function app_code_refresh_function_node_identifier_add(
  parent,
  name,
  args,
) {
  let i = html_code_identifier(parent, name);
  app_code_refresh_function_node_identifier_add_generic(args, name, i);
  html_on_click(i, () => {});
}
