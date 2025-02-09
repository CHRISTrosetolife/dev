import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_document_get } from "./html_document_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_function } from "./global_function.mjs";
import { html_interacted } from "./html_interacted.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function html_interacted_initialize() {
  let g = global_function(html_interacted);
  object_property_initialize(g, "initialized", false);
  let start = true;
  each(list, (item) => {});
  html_on_click(html_document_get(), () => {
    if (start) {
      object_property_set(g, "initialized", true);
      start = false;
    }
  });
}
