import { function_deploy_path } from "./function_deploy_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
import { storage_upload_string } from "./storage_upload_string.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
export async function function_deploy(name) {
  let code = await function_dependencies_string(name);
  let version = date_string_iso_file();
  await storage_upload_string(code, function_deploy_path(name, version));
  await storage_upload_object(
    {
      name,
      version,
    },
    path_join(["function", name, file_name_json("version")]),
  );
}
