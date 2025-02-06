import { string_delimit_double } from "./string_delimit_double.mjs";
import { js_keyword_from } from "./js_keyword_from.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_import_generic(a, b) {
  return js_code_statement(
    string_combine_multiple([
      js_keyword_import(),
      " ",
      a,
      " ",
      js_keyword_from(),
      " ",
      string_delimit_double(b),
    ]),
  );
}
