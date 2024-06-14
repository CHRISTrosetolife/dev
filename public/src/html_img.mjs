import { folder_img_name } from "./folder_img_name.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_element } from "./html_element.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_img(parent, img_name) {
  let i1 = html_element(parent, "img");
  let img_path = string_combine_multiple([
    "./",
    folder_img_name(),
    "/",
    img_name,
  ]);
  let { element } = i1;
  object_property_set(element, "src", img_path);
  return i1;
}
