import { list_adder } from "./list_adder.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_imports_sources(ast) {
  let existing = list_adder((la) => {
    js_visit_node(ast, "ImportDeclaration", (v) => {
      let { node } = v;
      let { source } = node;
      let { value } = source;
      la(value);
    });
  });
  return existing;
}
