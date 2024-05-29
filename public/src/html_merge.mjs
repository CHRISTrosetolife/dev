import { html_attribute_set } from "./html_attribute_set.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_merge(component, to_merge) {
  let ps = object_properties(to_merge);
  for (let p of ps) {
    let value = object_property_get(to_merge, p);
    html_attribute_set(component, p, value);
  }
}
