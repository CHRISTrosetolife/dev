import { file_open_unawait } from "./file_open_unawait.mjs";
import { app_html_path } from "./app_html_path.mjs";
export function function_open_app_html(name) {
  let output_path = app_html_path(name);
  file_open_unawait(output_path);
}
