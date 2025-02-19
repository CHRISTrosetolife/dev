import { js_visit_generic } from "./js_visit_generic.mjs";
import { tautology } from "./tautology.mjs";
export function js_visit(ast, lambda) {
  let filter = tautology;
  js_visit_generic(ast, filter, lambda);
}
