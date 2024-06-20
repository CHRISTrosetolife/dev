import { html_id } from "./html_id.mjs";
import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
import { log } from "./log.mjs";
export function html_scrollable_hide(root, map_c) {
  let style = html_element(root, "style");
  let id = html_id(root);
  log({
    id,
  });
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
