import { object_property_get } from "./object_property_get.mjs";
export function js_return_argument_type(node) {
  let argument = object_property_get(node, "argument");
  if (argument === null) {
    return null;
  }
  return argument.type;
}
