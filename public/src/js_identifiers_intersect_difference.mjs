import { list_difference } from "./list_difference.mjs";
import { js_identifiers_intersect } from "./js_identifiers_intersect.mjs";
export function js_identifiers_intersect_difference(ast, intersected, without) {
  let identifier_fns = js_identifiers_intersect(ast, intersected);
  let missing = list_difference(identifier_fns, without);
  return missing;
}
