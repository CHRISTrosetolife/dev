import {object_property_get} from "./object_property_get.mjs";
export function html_value_get(component, value) {
  let {element} = component;
  return object_property_get(element, 'value');
}
