import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { app_contact_download_responses_lookup } from "./app_contact_download_responses_lookup.mjs";
import { function_get } from "./function_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_overwrite() {
  let lookup = app_contact_download_responses_lookup();
  let responses_new2 = await app_contact_download_responses_get();
  each(responses_new2, function (n) {
    let message = object_property_get(n, "message");
    if (object_property_exists(lookup, message)) {
      let e = object_property_get(lookup, message);
      assert(equal_json, [e, n]);
    }
  });
  let responses_new = responses_new2;
  await generate_list_fn(
    function_get(responses_new),
    app_contact_download_responses_overwrite,
  );
}
