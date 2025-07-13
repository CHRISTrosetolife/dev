import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { app_contact_download_responses } from "./app_contact_download_responses.mjs";
export async function app_contact_download_responses_test() {
  let responses_new = await app_contact_download_responses_get();
  let existing = app_contact_download_responses();
}
