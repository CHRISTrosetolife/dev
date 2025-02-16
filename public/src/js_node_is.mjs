import { null_or_undefined } from "./null_or_undefined.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function js_node_is(candidate) {
  if (null_or_undefined(candidate)) {
    let v = false;
    return v;
  }
  let v2 = object_property_exists(candidate, "type");
  return v2;
}
