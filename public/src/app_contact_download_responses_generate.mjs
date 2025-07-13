import { app_contact_download_responses_test } from "./app_contact_download_responses_test.mjs";
import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_generate() {
  await app_contact_download_responses_test();
  await generate_list_fn(
    app_contact_download_responses_get,
    app_contact_download_responses_generate,
  );
}
