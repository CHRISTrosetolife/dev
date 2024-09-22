import { list_intersect } from "./list_intersect.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
export function js_identifiers_intersect(ast, specified) {
  let identifiers = js_identifiers(ast);
  let identifier_fns = list_intersect(identifiers, specified);
  return identifier_fns;
}
