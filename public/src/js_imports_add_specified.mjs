import { log } from "./log.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { js_identifiers_intersect_difference } from "./js_identifiers_intersect_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
export function js_imports_add_specified(ast, specified) {
  let name = js_declaration_single_name(ast);
  let self = [name];
  let existing = js_imports_existing_names(ast);
  let combined = list_concat(existing, self);
  let missing = js_identifiers_intersect_difference(ast, specified, combined);
  log({
    missing,
  });
  let { body } = ast;
  for (let m of missing) {
    let code = js_code_import(m);
    let first = js_parse_first(code);
    list_add_first(body, first);
  }
}
