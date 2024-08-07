import { object_property_set } from "./object_property_set.mjs";
import { folder_img_name } from "./folder_img_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_img_src(component, img_name) {
  let img_path = string_combine_multiple([
    "./",
    folder_img_name(),
    "/",
    img_name,
  ]);
  let { element } = component;
  object_property_set(element, "src", img_path);
}
