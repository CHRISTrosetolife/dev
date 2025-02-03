import { functions_source_get } from "./functions_source_get.mjs";
export async function app_code_local_upload() {
  await functions_source_get();
}
