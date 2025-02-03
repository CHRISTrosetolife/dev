import { storage_upload_object } from "./storage_upload_object.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
export async function app_code_local_upload() {
  let s = await functions_source_get();
  await storage_upload_object("code/functions/local.json", s);
}
