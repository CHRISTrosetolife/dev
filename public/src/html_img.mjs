import { html_img_src } from "./html_img_src.mjs";
import { html_element } from "./html_element.mjs";
export function html_img(parent, img_name) {
  let component = html_element(parent, "img");
  html_img_src(img_name, component);
  return component;
}
