import { list_get_end_2 } from "./list_get_end_2.mjs";
import { js_import_external_is } from "./js_import_external_is.mjs";
import { js_import_declaration_source_value } from "./js_import_declaration_source_value.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_imports_existing(ast) {
  let existing = list_adder(function (la) {
    js_visit_node(ast, "ImportSpecifier", function (v) {
      let { node } = v;
      let { stack } = v;
      let e = list_get_end_2(stack);
      let sv = js_import_declaration_source_value(e);
      if (js_import_external_is(sv)) {
        let v2;
        return v2;
      }
      let { imported } = node;
      if (imported.type === "Identifier") {
        la(imported);
      }
    });
  });
  return existing;
}
