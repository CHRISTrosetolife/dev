import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_function } from "./global_function.mjs";
import { html_interacted } from "./html_interacted.mjs";
export function html_interacted_initialize() {
  let g = global_function(html_interacted);
  object_property_initialize(g, "initialized", false);
}
