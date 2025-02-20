import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_function_node_selectable_add } from "./app_code_refresh_function_node_selectable_add.mjs";
export function app_code_refresh_function_node_identifier_add_generic(
  args,
  identifier,
  component,
) {
  let data_property_name = "identifiers";
  let key = object_property_get(identifier, "name");
  app_code_refresh_function_node_selectable_add(
    identifier,
    args,
    data_property_name,
    component,
    key,
  );
}
