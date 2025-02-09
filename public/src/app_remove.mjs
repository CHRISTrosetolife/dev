import { app_html_path_dev } from "./app_html_path_dev.mjs";
import { each_async } from "./each_async.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { app_html_path } from "./app_html_path.mjs";
import { function_delete } from "./function_delete.mjs";
import { app_identifier } from "./app_identifier.mjs";
export async function app_remove(name) {
  let name_prefixed = app_identifier(name);
  await function_delete(name_prefixed);
  await each_async([app_html_path, app_html_path_dev], async (fn) => {
    await file_delete_if_exists(fn(name));
  });
}
