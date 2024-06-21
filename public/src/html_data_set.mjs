import { html_data_attribute } from "./html_data_attribute.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_data_set(component, data_name, data_value) {
  html_attribute_set(component, html_data_attribute(data_name), data_value);
}
