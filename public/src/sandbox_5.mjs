import { list_to } from "./list_to.mjs";
import { set_includes } from "./set_includes.mjs";
import { set_add } from "./set_add.mjs";
import { each } from "./each.mjs";
import { set_new } from "./set_new.mjs";
import { js_unparsable } from "./js_unparsable.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_parse } from "./function_parse.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5b"));
  let found = {};
  js_visit(ast, function (v) {
    let node = object_property_get(v, "node");
    let names = js_identifiers_scoped(v);
    let duplicates = set_new();
    let existing = set_new();
    each(names, function (item) {
      if (set_includes(existing, item)) {
        set_add(duplicates, item);
      } else {
        set_add(existing, item);
      }
    });
    let ds = list_to(duplicates);
    if (js_unparsable(node)) {
      log({
        node: js_unparse(node),
        names,
        ds,
      });
    }
  });
}
