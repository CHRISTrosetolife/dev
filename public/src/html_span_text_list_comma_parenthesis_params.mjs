import { list_map_property } from "./list_map_property.mjs";
import { app_code_refresh_function_node_identifier_add } from "./app_code_refresh_function_node_identifier_add.mjs";
import { html_span_text_list_comma_parenthesis } from "./html_span_text_list_comma_parenthesis.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_span_text_list_comma_parenthesis_params(
  parent,
  node,
  args,
) {
  let params = object_property_get(node, "params");
  let names = list_map_property(params, "name");
  html_span_text_list_comma_parenthesis(parent, names, lambda);
  function lambda(param) {
    app_code_refresh_function_node_identifier_add(parent, param, args);
  }
}
