import { app_html_path } from "./app_html_path.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { file_delete } from "./file_delete.mjs";
export async function app_remove(name) {
  let name_prefixed = app_identifier(name);
  await function_delete(name_prefixed);
  await file_delete(app_html_path(name));
}
