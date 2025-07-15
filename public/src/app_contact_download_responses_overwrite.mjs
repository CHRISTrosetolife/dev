import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { function_get } from "./function_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_overwrite() {
  let responses_new = await app_contact_download_responses_get();
  await generate_list_fn(
    function_get(responses_new),
    app_contact_download_responses_overwrite,
  );
}
