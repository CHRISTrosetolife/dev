import { function_open } from "./function_open.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_contact_main_open() {
  let v = await function_open(fn_name("app_contact_main"));
  return v;
}
