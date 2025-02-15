import { js_stack_find_list_visitor } from "./js_stack_find_list_visitor.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_dollar_else(v, value_new) {
  let { current, list, item } = js_stack_find_list_visitor(v);
  let previous = null;
  while (js_node_is(current) && current.type === "IfStatement") {
    previous = current;
    current = object_property_get(current, "alternate");
  }
  if (previous !== null) {
    object_property_set(previous, "alternate", value_new);
    list_remove(list, item);
  }
}
