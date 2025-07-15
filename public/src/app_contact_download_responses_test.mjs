import { app_contact_download_responses_test_inner } from "./app_contact_download_responses_test_inner.mjs";
import { app_contact_download_responses_lookup } from "./app_contact_download_responses_lookup.mjs";
import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
export async function app_contact_download_responses_test() {
  let lookup = app_contact_download_responses_lookup();
  let responses_new = await app_contact_download_responses_get();
  app_contact_download_responses_test_inner(responses_new, lookup);
  let v = responses_new;
  return v;
}
