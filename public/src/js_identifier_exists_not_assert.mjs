import { assert_boolean } from "./assert_boolean.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_identifier_exists_not_assert(ast, identifier_to_name) {
  let existing = js_identifiers_names(ast);
  let exists = list_includes(existing, identifier_to_name);
  assert_boolean(exists);
}
