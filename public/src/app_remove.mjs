import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { app_html_path } from "./app_html_path.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_identifier } from "./app_identifier.mjs";
export async function app_remove(name) {
  let name_prefixed = app_identifier(name);
  await function_delete(name_prefixed);
  await file_delete_if_exists(app_html_path(name));
}
