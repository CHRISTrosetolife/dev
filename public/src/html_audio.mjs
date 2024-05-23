import { object_property_set } from "./object_property_set.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_element } from "./html_element.mjs";
export function html_audio(parent, img_name) {
  let i1 = html_element(parent, "img");
  let img_path = string_combine("./img/", img_name);
  let { element } = i1;
  object_property_set(element, "src", img_path);
  return i1;
}
