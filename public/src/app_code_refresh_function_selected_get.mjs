import { map_new } from "./map_new.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function app_code_refresh_function_selected_get(data) {
  return object_property_initialize(data, "selected", map_new());
}
