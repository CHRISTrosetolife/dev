import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function js_identifiers_intersect(ast, specified) {
  let identifiers = js_identifiers_names(ast);
  let identifier_fns = list_intersect(identifiers, specified);
  return identifier_fns;
}
