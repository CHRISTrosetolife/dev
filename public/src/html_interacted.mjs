import { object_property_get } from "./object_property_get.mjs";
import { global_function } from "./global_function.mjs";
export function html_interacted() {
  let g = global_function(html_interacted);
  let interacted = object_property_get(g, "interacted");
  return interacted;
}
