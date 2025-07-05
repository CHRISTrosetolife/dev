import { fn_name } from "./fn_name.mjs";
import { function_deploy } from "./function_deploy.mjs";
export async function app_contact_main_open() {
  let v = await function_deploy(fn_name("app_contact_main"));
  return v;
}
