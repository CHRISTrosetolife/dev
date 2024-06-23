import { html_img_element } from "./html_img_element.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function html_img(parent, img_name) {
  let component = html_img_element(parent);
  html_img_src(component, img_name);
  return component;
}
