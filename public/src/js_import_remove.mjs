import { list_remove } from "./list_remove.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_single } from "./list_single.mjs";
import { js_imports_existing_named } from "./js_imports_existing_named.mjs";
export function js_import_remove(ast, e) {
  let { body } = ast;
  let existing2 = js_imports_existing_named(ast, e);
  if (false) {
  }
  let e2 = list_single(existing2);
  let { stack } = e2;
  let ancestor = list_get_end(stack, 1);
  list_remove(body, ancestor);
}
