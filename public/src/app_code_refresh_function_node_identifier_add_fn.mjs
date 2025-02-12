import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_function_node_identifier_add_generic } from "./app_code_refresh_function_node_identifier_add_generic.mjs";
import { html_code_identifier_fn } from "./html_code_identifier_fn.mjs";
export function app_code_refresh_function_node_identifier_add_fn(
  parent,
  identifier,
  args,
) {
  let name = object_property_get(identifier, "name");
  let i = html_code_identifier_fn(parent, name);
  app_code_refresh_function_node_identifier_add_generic(args, identifier, i);
}
