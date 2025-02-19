import { list_includes } from "./list_includes.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export function js_identifier_exists(ast, identifier_to_name) {
  let existing = js_identifiers_names(ast);
  let exists = list_includes(existing, identifier_to_name);
  return exists;
}
