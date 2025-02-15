import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_identifiers_defines } from "./js_identifiers_defines.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_duplicates } from "./list_duplicates.mjs";
export function js_identifiers_duplicates(ast) {
  let identifiers_all = list_adder(function (la) {
    js_visit(ast, function (v) {
      let node = object_property_get(v, "node");
      let identifiers = js_identifiers_defines(node);
      each(identifiers, la);
      let identifiers_all;
    });
  });
  function v() {}
  let v2 = list_duplicates(identifiers_all);
  return v2;
}
