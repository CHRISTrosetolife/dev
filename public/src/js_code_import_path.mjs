import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { string_combine } from "./string_combine.mjs";
export function js_code_import_path(import_path, import_name) {
  let import_path_combined = string_combine(import_path, import_name);
  let a = string_combine_multiple(["{ ", import_name, " }"]);
  let import_code = js_code_statement(
    string_combine_multiple([
      "import ",
      a,
      ' from "',
      import_path_combined,
      '.mjs"',
    ]),
  );
  return import_code;
}
