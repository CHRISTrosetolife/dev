import { app_identifier } from "./app_identifier.mjs";
import { function_open } from "./function_open.mjs";
export async function function_open_app(name) {
  let name_prefixed = app_identifier(name);
  await function_open(name_prefixed);
}
