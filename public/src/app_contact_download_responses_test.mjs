import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_to_lookup_property } from "./list_to_lookup_property.mjs";
import { each } from "./each.mjs";
import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { app_contact_download_responses } from "./app_contact_download_responses.mjs";
export async function app_contact_download_responses_test() {
  let responses_existing = app_contact_download_responses();
  let lookup = list_to_lookup_property(responses_existing, "message");
  let responses_new = await app_contact_download_responses_get();
  each(responses_new, function (r) {
    let message = object_property_get(r, "message");
    let e = object_property_get(lookup, message);
    assert(equal_json, []);
  });
}
