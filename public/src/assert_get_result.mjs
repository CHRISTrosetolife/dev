import { undefined_not_is } from "./undefined_not_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function assert_get_result(result, key, object) {
  assert_message(undefined_not_is, [result], function () {
    let v = {
      key,
      object,
    };
    return v;
  });
  return result;
}
