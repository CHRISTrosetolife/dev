import { object_property_delete } from "./object_property_delete.mjs";
export function js_value_string_set(node, value) {
  node.value = value;
  let property = "raw";
  object_property_delete(node, property);
}
