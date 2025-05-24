import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  let la_fn = list_adder_unique;
  return js_identifiers_names_generic(la_fn, ast);
}
function js_identifiers_names_generic(la_fn, ast) {
    let v2 = la_fn(function (la) {
        js_visit_identifiers(ast, function (v) {
            let { node } = v;
            la(node.name);
        });
    });
    return v2;
}

