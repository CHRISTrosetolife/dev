import { html_on_remove_result } from "./html_on_remove_result.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_document_get } from "./html_document_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_function } from "./global_function.mjs";
import { html_interacted } from "./html_interacted.mjs";
import { list_map } from "./list_map.mjs";
import { html_on_click_noload } from "./html_on_click_noload.mjs";
export function html_interacted_initialize() {
  let g = global_function(html_interacted);
  object_property_initialize(g, "interacted", false);
  let start = true;
  let mapped = list_map([html_on_keydown, html_on_click_noload], function (on) {
    let result = on(html_document_get(), function () {
      if (start) {
        object_property_set(g, "interacted", true);
        start = false;
        each(mapped, function (item) {
          html_on_remove_result(item);
        });
      }
    });
    let v = result;
    return v;
  });
}
