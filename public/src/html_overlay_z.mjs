import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_function } from "./global_function.mjs";
import { fn_name } from "./fn_name.mjs";
export function html_overlay_z() {
  let g = global_function(html_overlay_z);
  let v = object_property_initialize(g, "list", [
    fn_name("html_audio"),
    fn_name("html_loader"),
    fn_name("app_code_refresh_function"),
  ]);
  return v;
}
