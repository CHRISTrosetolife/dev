import { log } from "./log.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_imports_default(ast) {
  let existing = list_adder((la) => {
    js_visit_node(ast, "ImportDefaultSpecifier", (v) => {
      let { node } = v;
      log({});
      la(node);
    });
  });
  return existing;
}
