import { app_contact_download_responses_get } from "./app_contact_download_responses_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_generate() {
  await generate_list_fn(async function () {
    let v = await app_contact_download_responses_get();
    return v;
  }, fn);
}
