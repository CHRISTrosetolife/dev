import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { js_visit_identifiers_named } from "./js_visit_identifiers_named.mjs";
import { string_is } from "./string_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { assert } from "./assert.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export function js_identifier_rename(
  ast,
  identifier_from_name,
  identifier_to_name,
) {
  assert_arguments_length(arguments, 3);
  assert(string_is, [identifier_from_name]);
  assert(string_is, [identifier_to_name]);
  let existing = js_identifiers_names(ast);
  js_visit_identifiers_named(ast, identifier_from_name, lambda);
  function lambda(node) {
    object_property_set(node, "name", identifier_to_name);
  }
}
