import { object_property_get } from "./object_property_get.mjs";
export function js_return_argument_type(node) {
  let argument2 = object_property_get(node, "argument");
  if (argument2 === null) {
    return null;
  }
  return node.argument.type;
}
