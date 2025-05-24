import { list_adder } from "./list_adder.mjs";
import { js_identifiers_names_generic } from "./js_identifiers_names_generic.mjs";
export function js_identifiers_names_duplicates(ast) {
  let la_fn = list_adder;
  let v = js_identifiers_names_generic(la_fn, ast);
  return v;
}
