import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_import_generic(a, b) {
  return js_code_statement(
    string_combine_multiple(["import ", a, " from ", '"', b, '"']),
  );
}
