import { object_merge } from "./object_merge.mjs";
export function html_scroll_center_generic(component, additional) {
  let { element } = component;
  let options = {
    behavior: "auto",
    block: "center",
    inline: "center",
  };
  object_merge(options, additional);
  element.scrollIntoView(options);
}
