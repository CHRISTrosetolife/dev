import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export function app_memorize_version_code_get(context) {
  let save = app_memorize_save_get(context);
  return object_property_initialize(save, "version_code", "engbsb");
}
