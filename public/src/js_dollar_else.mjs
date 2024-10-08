import { object_property_get } from "./object_property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_next } from "./list_next.mjs";
import { list_find_last } from "./list_find_last.mjs";
import { list_is } from "./list_is.mjs";
export function js_dollar_else(v, value_new) {
  let { stack } = v;
  let predicate = list_is;
  let list = list_find_last(stack, predicate);
  let item = list_next(stack, list);
  let current = list_previous(list, item);
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
