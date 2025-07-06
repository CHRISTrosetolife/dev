import { function_run } from "./function_run.mjs";
import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { function_deploy_path_version } from "./function_deploy_path_version.mjs";
import { function_deploy_path } from "./function_deploy_path.mjs";
import { storage_upload_string } from "./storage_upload_string.mjs";
export async function function_result_path(f_name) {
  await function_run();
  await storage_upload_string(code, function_deploy_path(f_name, version));
  await storage_upload_object_force(
    {
      name: f_name,
      version,
    },
    function_deploy_path_version(f_name),
  );
}
