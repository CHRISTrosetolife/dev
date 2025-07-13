import { function_get } from "./function_get.mjs";
import { app_contact_download_responses_test } from "./app_contact_download_responses_test.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_generate() {
  let responses_new = await app_contact_download_responses_test();
  await generate_list_fn(
    function_get(responses_new),
    app_contact_download_responses_generate,
  );
}
