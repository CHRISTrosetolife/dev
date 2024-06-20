import { object_property_set } from "./object_property_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { number_to_letters } from "./number_to_letters.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { html_scrollable_hide } from "./html_scrollable_hide.mjs";
import { global_function } from "./global_function.mjs";
export function html_id(component) {
  let data = global_function(html_scrollable_hide);
  let id_next = object_property_initialize(data, "id_next", 0);
  let id = number_to_letters(id_next);
  html_attribute_set(component, "id", id);
  id_next++;
  object_property_set(data, "id_next", id_next);
  return id;
}
