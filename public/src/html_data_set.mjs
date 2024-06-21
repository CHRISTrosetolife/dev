import { string_combine } from "./string_combine.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_data_set(component, data_name, data_value) {
  html_attribute_set(component, string_combine("data-", data_name), data_value);
}
