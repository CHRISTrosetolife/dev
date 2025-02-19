import { list_includes_not } from "./list_includes_not.mjs";
import { assert } from "./assert.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_identifier_exists_not_assert(ast, identifier_to_name) {
  let existing = js_identifiers_names(ast);
  let exists = list_includes(existing, identifier_to_name);
  assert(list_includes_not, [existing, identifier_to_name]);
}
