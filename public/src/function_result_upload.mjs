import { function_result_path } from "./function_result_path.mjs";
import { function_run } from "./function_run.mjs";
import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
export async function function_result_upload(f_name) {
  let result = await function_run(f_name);
  await storage_upload_object_force(result, function_result_path(f_name));
}
