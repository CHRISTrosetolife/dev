import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_deploy_path_version } from "./function_deploy_path_version.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_load(name) {
  let name_prefixed = string_combine_multiple([app_prefix(), name]);
  let v = await http_storage_get(function_deploy_path_version(name));
  let version = object_property_get(v, "version");
  log({
    version,
  });
}
