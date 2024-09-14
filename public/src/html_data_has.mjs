import { html_data_attribute } from "./html_data_attribute.mjs";
import { html_attribute_has } from "./html_attribute_has.mjs";
export function html_data_has(previous_token_element, attribute_name) {
  return html_attribute_has(
    previous_token_element,
    html_data_attribute(attribute_name),
  );
}
