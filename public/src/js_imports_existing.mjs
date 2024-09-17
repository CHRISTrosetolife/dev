import { list_adder } from "./list_adder.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_imports_existing(ast) {
  let existing = list_adder((la) => {
    js_visit_node(ast, "ImportSpecifier", (v) => {
      let { node } = v;
      let { imported } = node;
      if (imported.type === "Identifier") {
        la(imported.name);
      }
    });
  });
  return existing;
}
