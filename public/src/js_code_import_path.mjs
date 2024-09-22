import { js_code_import_generic } from "./js_code_import_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
export function js_code_import_path(import_path, import_name) {
  let import_path_combined = string_combine(import_path, import_name);
  let a = string_combine_multiple(["{ ", import_name, " }"]);
  let b = string_combine_multiple([import_path_combined, ".mjs"]);
  let import_code = js_code_import_generic(a, b);
  return import_code;
}
