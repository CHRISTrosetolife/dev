import { app_identifier } from "./app_identifier.mjs";
import { app_name } from "./app_name.mjs";
import { function_open } from "./function_open.mjs";
export async function function_open_app(app_name) {
  let name_prefixed = app_identifier(app_name);
  await function_open(name_prefixed);
}
