import { object_property_get } from "./object_property_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function html_clear_scroll_top_centered_context(context) {
  html_clear_scroll_top_centered();
  let root = object_property_get(context, "root");
  return root;
}
