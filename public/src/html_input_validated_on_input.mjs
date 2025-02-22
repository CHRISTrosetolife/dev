import { object_property_get } from "./object_property_get.mjs";
export function html_input_validated_on_input(component_input) {
  object_property_get(component_input, "on_input")();
}
