import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_get } from "./html_attribute_get.mjs";
export function html_scrollable_hide(root, map_c) {
  let style = html_element(root, "style");
  html_inner_set(
    style,
    `#${html_attribute_get(root, "id")}::-webkit-scrollbar {
  display: none;
}`,
  );
  html_style(map_c, {
    overflow: "scroll",
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  });
}
