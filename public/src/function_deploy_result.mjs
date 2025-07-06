import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { function_deploy_path_version } from "./function_deploy_path_version.mjs";
import { function_deploy_path } from "./function_deploy_path.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { storage_upload_string } from "./storage_upload_string.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
export async function function_deploy_result(name) {
  let code = await function_dependencies_string(name);
  let version = date_string_iso_file();
  await storage_upload_string(code, function_deploy_path(name, version));
  await storage_upload_object_force(
    {
      name,
      version,
    },
    function_deploy_path_version(name),
  );
}
