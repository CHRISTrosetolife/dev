import { not } from "./not.mjs";
import { assert } from "./assert.mjs";
import { js_identifier_exists } from "./js_identifier_exists.mjs";
export function js_identifier_exists_not_assert(ast, identifier_to_name) {
  let exists = js_identifier_exists(ast, identifier_to_name);
  assert(not, [exists]);
}
