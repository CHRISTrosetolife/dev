import { string_combine } from "./string_combine.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_data_set(clicker, data_name, base_id) {
  html_attribute_set(clicker, string_combine("data-", data_name), base_id);
}
