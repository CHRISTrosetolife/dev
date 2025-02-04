import { object_property_set } from "./object_property_set.mjs";
export function html_input_validated_on_input_lambda(input_component, lambda) {
  object_property_set(input_component, "on_input_lambda", lambda);
}
