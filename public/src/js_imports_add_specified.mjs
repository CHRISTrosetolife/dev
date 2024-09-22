import { list_concat } from "./list_concat.mjs";
import { js_identifiers_intersect } from "./js_identifiers_intersect.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
export function js_imports_add_specified(ast, specified) {
  let name = js_declaration_single_name(ast);
  let self = [name];
  let existing = js_imports_existing(ast);
  let identifier_fns = js_identifiers_intersect(ast, specified);
  let combined = list_concat(existing, self);
  let missing = list_difference(identifier_fns, combined);
  let { body } = ast;
  for (let m of missing) {
    let code = js_code_import(m);
    let first = js_parse_first(code);
    list_add_beginning(body, first);
  }
}
