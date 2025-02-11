import { json_format_to } from "./json_format_to.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_inner_set_json_format(progress, object) {
  html_inner_set(progress, json_format_to(object));
}
