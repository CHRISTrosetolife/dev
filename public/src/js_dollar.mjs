import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast);
}
