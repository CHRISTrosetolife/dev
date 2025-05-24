import { js_identifiers_names_generic } from "./js_identifiers_names_generic.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  let la_fn = list_adder_unique;
  let v = js_identifiers_names_generic(la_fn, ast);
  return v;
}
