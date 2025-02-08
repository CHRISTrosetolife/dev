import { app_code_refresh_function_node_identifier_add_generic } from "./app_code_refresh_function_node_identifier_add_generic.mjs";
import { html_code_identifier_fn } from "./html_code_identifier_fn.mjs";
export function app_code_refresh_function_node_identifier_add(
  parent,
  name,
  args,
) {
  let i = html_code_identifier_fn(parent, name);
  app_code_refresh_function_node_identifier_add_generic(args, name, i);
}
