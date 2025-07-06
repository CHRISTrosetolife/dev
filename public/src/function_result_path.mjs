import { function_run } from "./function_run.mjs";
import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { function_deploy_path } from "./function_deploy_path.mjs";
export async function function_result_path(f_name) {
  let result = await function_run(f_name);
  await storage_upload_object_force(result, function_deploy_path(f_name));
}
