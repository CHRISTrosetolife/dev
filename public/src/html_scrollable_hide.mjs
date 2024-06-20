import { object_property_set } from "./object_property_set.mjs";
import { global_function } from "./global_function.mjs";
import { number_to_letters } from "./number_to_letters.mjs";
import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function html_scrollable_hide(map_c) {
  let data = global_function(html_scrollable_hide);
  let id_next = object_property_initialize(data, "id_next", 0);
  html_attribute_set(map_c, "id", number_to_letters(id_next));
  id_next++;
  object_property_set(data, "id_next", id_next);
  let style = html_element(map_c, "style");
  html_inner_set(
    style,
    `#${id}::-webkit-scrollbar {
  display: none;
}`,
  );
  html_style(map_c, {
    overflow: "scroll",
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  });
}
