import { storage_upload_object } from "./storage_upload_object.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function function_deploy(name) {
  let name_prefixed = string_combine_multiple([app_prefix(), name]);
  let code = await function_dependencies_string(name_prefixed);
  await storage_upload_object();
}
