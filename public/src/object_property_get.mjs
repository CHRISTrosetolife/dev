import { assert_message_json } from "./assert_message_json.mjs";
import { json_to } from "./json_to.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function object_property_get(object, property_name) {
  let result = object[property_name];
  assert_message_json(undefined_not_is, [result], () =>
    json_to({
      object,
      property_name,
    }),
  );
  return result;
}
