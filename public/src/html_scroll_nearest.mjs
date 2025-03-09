import { html_scroll_center_generic } from "./html_scroll_center_generic.mjs";
export function html_scroll_nearest(component) {
  let additional = {
    block: "nearest",
    inline: "nearest",
  };
  html_scroll_center_generic(component, additional);
}
