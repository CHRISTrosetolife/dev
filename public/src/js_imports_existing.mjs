import { js_import_declaration_source_value } from "./js_import_declaration_source_value.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_imports_existing(ast) {
  let existing = list_adder((la) => {
    js_visit_node(ast, "ImportSpecifier", (v) => {
      let { node } = v;
      let { stack } = v;
      let e = list_get_end_1(stack);
      let sv = js_import_declaration_source_value(e);
      if (false) {
      }
      let { imported } = node;
      if (imported.type === "Identifier") {
        la(imported.name);
      }
    });
  });
  return existing;
}
