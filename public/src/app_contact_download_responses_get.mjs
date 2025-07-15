import { app_contact_download_responses_convert } from "./app_contact_download_responses_convert.mjs";
import { app_contact_download_all } from "./app_contact_download_all.mjs";
export async function app_contact_download_responses_get() {
  let r = await app_contact_download_all();
  let v = app_contact_download_responses_convert(r);
  return v;
}
