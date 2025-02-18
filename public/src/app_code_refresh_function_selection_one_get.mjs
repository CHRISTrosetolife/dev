import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_selection_one_get(selection_result) {
  let one = object_property_get(selection_result, "one");
  let visitor = object_property_get(one, "visitor");
  let node = object_property_get(visitor, "node");
  let v = {
    visitor,
    node,
  };
  return v;
}
