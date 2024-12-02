import { storage_upload_string } from "./storage_upload_string.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
export async function function_deploy(name) {
  let code = await function_dependencies_string(name);
  await storage_upload_string(code);
}
