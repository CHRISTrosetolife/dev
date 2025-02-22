import { object_property_get } from "./object_property_get.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
export function html_on_keydown_enter(input, on_click) {
  html_on_keydown(input, function (event) {
    let key = object_property_get(event, "key");
    if (key === "Enter") {
      on_click();
    }
  });
}
