import { html_id } from "./html_id.mjs";
import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_scrollable_hide(root, map_c) {
  html_style(context.root, {
    overflow: "hidden",
  });
  return;
  let style = html_element(context.root, "style");
  let id = html_id(context.root);
  html_inner_set(
    style,
    `#${id}::-webkit-scrollbar {
  display: none;
}`,
  );
  html_style(context.map_c, {
    overflow: "scroll",
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  });
}
