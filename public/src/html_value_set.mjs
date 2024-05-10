import { object_property_set } from "./object_property_set.mjs";
export function html_value_set(component, value) {
  let { element } = component;
  object_property_set(element, "value", value);
}
