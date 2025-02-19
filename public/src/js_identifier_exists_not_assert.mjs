import { js_identifier_exists } from "./js_identifier_exists.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
export function js_identifier_exists_not_assert(ast, identifier_to_name) {
  let exists = js_identifier_exists(ast, identifier_to_name);
  assert_boolean(exists);
}
