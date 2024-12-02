import { storage_upload_object } from "./storage_upload_object.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
import { storage_upload_string } from "./storage_upload_string.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
export async function function_deploy(name) {
  let code = await function_dependencies_string(name);
  let version = date_string_iso_file();
  await storage_upload_string(
    code,
    path_join(["function", name, string_combine_multiple([version, ".js"])]),
  );
  await storage_upload_object(
    {
      name,
      version,
    },
    path_join(["function", name, string_combine_multiple([version, ".js"])]),
  );
}
