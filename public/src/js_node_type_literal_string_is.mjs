import { object_property_get } from "./object_property_get.mjs";
import { string_is } from "./string_is.mjs";
import { js_node_type_literal_is } from "./js_node_type_literal_is.mjs";
export function js_node_type_literal_string_is(node) {
  return (
    js_node_type_literal_is(node) &&
    string_is(object_property_get(node, "value"))
  );
}
