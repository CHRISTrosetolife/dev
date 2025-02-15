import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_duplicates } from "./list_duplicates.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_shadow_has(ast) {
  let v3 = list_adder_unique(function (la) {
    js_visit(ast, function (v) {
      let names = js_identifiers_scoped(v);
      let ds = list_duplicates(names);
      each(ds, la);
    });
  });
  return v3;
}
