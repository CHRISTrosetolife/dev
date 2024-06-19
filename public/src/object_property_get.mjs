import { assert_message } from "./assert_message.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function object_property_get(object, property_name) {
  let result = object[property_name];
  assert_message(undefined_not_is, [result], () => ({
    property_name,
    object,
  }));
  return result;
}
