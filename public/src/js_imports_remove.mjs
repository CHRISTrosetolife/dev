import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_import_remove_try } from "./js_import_remove_try.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_export_single } from "./js_export_single.mjs";
export function js_imports_remove(ast) {
  let existing = js_imports_existing_names(ast);
  let export_ = js_export_single(ast);
  let used = js_identifiers_names(export_);
  let extra = list_difference(existing, used);
  for (let name of extra) {
    js_import_remove_try(ast, name);
  }
}
