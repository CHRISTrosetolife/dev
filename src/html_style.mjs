import {object_merge} from "./object_merge.mjs";
export function html_style(component, styles) {
  let {element} = component;
  object_merge(element.style, styles);
}
