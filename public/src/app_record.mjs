import { html_script_axios } from "./html_script_axios.mjs";
import { log } from "./log.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
export async function app_record() {
  await html_script_axios(root);
  let verses = await bible_engbsb_storage_http_get("bible");
  log({
    verses,
  });
}
