import { folder_current } from "./folder_current.mjs";
import { js_code_import_path } from "./js_code_import_path.mjs";
export function js_code_import(import_name) {
  let import_path = `${folder_current()}/`;
  let import_code = js_code_import_path(import_path, import_name);
  return import_code;
}
