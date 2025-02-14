import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  let v2 = list_adder_unique(function (la) {
    js_visit_identifiers(ast, function (v) {
      let { node } = v;
      la(node.name);
    });
  });
  return v2;
}
