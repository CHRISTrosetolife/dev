import { string_combine } from "./string_combine.mjs";
export function html_data_attribute(data_name) {
  return string_combine("data-", data_name);
}
