import { html_attribute_get } from "./html_attribute_get.mjs";
import { html_data_attribute } from "./html_data_attribute.mjs";
export function html_data_get(component, data_name) {
  return html_attribute_get(component, html_data_attribute(data_name));
}
