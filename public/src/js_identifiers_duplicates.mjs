import { js_visit } from "./js_visit.mjs";
export function js_identifiers_duplicates(ast) {
  js_visit(ast, function (v) {});
}
