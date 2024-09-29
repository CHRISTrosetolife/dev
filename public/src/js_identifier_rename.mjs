import { js_visit_identifiers_named } from "./js_visit_identifiers_named.mjs";
import { string_is } from "./string_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { assert } from "./assert.mjs";
export function js_identifier_rename(ast, identifier_from, identifier_to) {
  assert(string_is, [identifier_from]);
  assert(string_is, [identifier_to]);
  js_visit_identifiers_named(ast, identifier_from, lambda);
  function lambda(node) {
    object_property_set(node, "name", identifier_to);
  }
}
