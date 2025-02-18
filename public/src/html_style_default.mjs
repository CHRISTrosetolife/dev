import { fn_name } from "./fn_name.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function html_style_default() {
  let v = object_property_initialize(
    global_get(),
    fn_name("html_style_default"),
    {},
  );
  return v;
}
