import { list_get_end } from "./list_get_end.mjs";
import { list_single } from "./list_single.mjs";
import { js_imports_existing_named } from "./js_imports_existing_named.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { js_export_single } from "./js_export_single.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_import_remove(ast, name) {
  let existing = js_imports_existing(ast);
  let existing2 = js_imports_existing_named(ast, name);
  let { body } = ast;
  let export_ = js_export_single(ast);
  let used = js_identifiers(export_);
  let extra = list_difference(existing, used);
  for (let e of extra) {
    let e2 = list_single(existing2);
    let { stack } = e2;
    let ancestor = list_get_end(stack, 1);
    list_remove(body, ancestor);
  }
}
