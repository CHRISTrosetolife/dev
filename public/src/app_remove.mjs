import { function_delete } from "./function_delete.mjs";
import { app_identifier } from "./app_identifier.mjs";
export async function app_remove(name) {
  let name_prefixed = app_identifier(name);
  await function_delete(name_prefixed);
}
