import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_js_node_type_is(properties, type) {
  return list_filter(properties, function (p) {
    let v2 = js_node_type_is(p, type);
    return v2;
  });
}
