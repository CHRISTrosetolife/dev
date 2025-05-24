import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_identifiers_names_generic(la_fn, ast) {
  let v2 = la_fn(function (la) {
    js_visit_identifiers(ast, function (v) {
      let { node } = v;
      la(node.name);
    });
  });
  return v2;
}
