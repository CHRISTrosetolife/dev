import { assert_message_json } from "./assert_message_json.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function object_property_get(object, property_name) {
  let result = object[property_name];
  assert_message_json(undefined_not_is, [result], () => ({
    object,
    property_name,
  }));
  return result;
}
