import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_identifiers_defines } from "./js_identifiers_defines.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_identifiers_duplicates(ast) {
  list_adder(function (la) {
    js_visit(ast, function (v) {
      let node = object_property_get(v, "node");
      let identifiers = js_identifiers_defines(node);
      each(list, function (item) {});
    });
  });
}
