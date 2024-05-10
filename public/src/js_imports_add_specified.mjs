import { list_add_beginning } from "./list_add_beginning.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
export function js_imports_add_specified(ast, specified) {
  let name = js_declaration_single_name(ast);
  let self = [name];
  let existing = js_imports_existing(ast);
  let identifiers = js_identifiers(ast);
  let identifier_fns = list_intersect(identifiers, specified);
  let missing = list_difference(identifier_fns, existing);
  let missing_without_self = list_difference(missing, self);
  let { body } = ast;
  for (let m of missing_without_self) {
    let code = js_code_import(m);
    let first = js_parse_first(code);
    list_add_beginning(body, first);
  }
}
