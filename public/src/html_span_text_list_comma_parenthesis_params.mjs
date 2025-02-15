import { object_copy_merge } from "./object_copy_merge.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_span_text_list_comma_parenthesis } from "./html_span_text_list_comma_parenthesis.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_span_text_list_comma_parenthesis_params(
  parent,
  node,
  args,
) {
  let params = object_property_get(node, "params");
  html_span_text_list_comma_parenthesis(parent, params, lambda);
  function lambda(param) {
    app_code_refresh_function_node(
      object_copy_merge(args, {
        node: param,
      }),
    );
  }
}
