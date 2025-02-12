import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_node_identifier_named(node, name) {
  let identifier_is = js_node_is(node, "Identifier");
  let e = identifier_is && equal(object_property_get(node, "name"), name);
  return e;
}
