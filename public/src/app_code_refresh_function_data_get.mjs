import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_data_get(args) {
  let v = object_property_get(args, "data");
  return v;
}
