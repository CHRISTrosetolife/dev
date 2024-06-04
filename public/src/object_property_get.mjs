import { assert } from "./assert.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function object_property_get(object, property_name) {
  let result = object[property_name];
  assert(undefined_not_is, [result]);
  return result;
}
