import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers(ast) {
  return list_adder_unique((la) => {
    js_visit_identifiers(ast, (v) => {
      let { node } = v;
      la(node.name);
    });
  });
}
