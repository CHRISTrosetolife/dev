import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
let id = 1;
export async function html_scrollable_hide(map_c) {
  html_attribute_set(map_c, "id", id);
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
