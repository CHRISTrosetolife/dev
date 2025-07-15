import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function app_contact_download_responses_test_inner(
  responses_new,
  lookup,
) {
  each(responses_new, function (n) {
    let message = object_property_get(n, "message");
    if (object_property_exists(lookup, message)) {
      let e = object_property_get(lookup, message);
      assert(equal_json, [e, n]);
    }
  });
}
