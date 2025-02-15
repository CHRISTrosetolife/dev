import { assert_get_result } from "./assert_get_result.mjs";
export function object_property_get(object, property_name) {
  let result = object[property_name];
  let v = assert_get_result(result, property_name, object);
  return v;
}
