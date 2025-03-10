import { js_code_call } from "./js_code_call.mjs";
import { function_deploy_path } from "./function_deploy_path.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_deploy_path_version } from "./function_deploy_path_version.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_load(name) {
  await html_script_axios(html_document_body());
  let name_prefixed = string_combine_multiple([app_prefix(), name]);
  let v = await http_storage_get(function_deploy_path_version(name_prefixed));
  let version = object_property_get(v, "version");
  let script = await http_storage_get(
    function_deploy_path(name_prefixed, version),
  );
  await eval("(async () => {" + script + "})()");
  await eval(js_code_call(name_prefixed));
}
