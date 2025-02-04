import { object_property_get } from "./object_property_get.mjs";
export function html_input_validated_on_input(input_username) {
  object_property_get(input_username, "on_input")();
}
