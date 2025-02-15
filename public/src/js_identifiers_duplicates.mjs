import { js_identifiers_defines } from "./js_identifiers_defines.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function js_identifiers_duplicates(ast) {
  js_visit(ast, function (v) {
    let node = object_property_get(v, "node");
    let identifiers = js_identifiers_defines(node);
    if (list_empty_not_is(identifiers)) {
      log({
        identifiers,
      });
    }
  });
}
