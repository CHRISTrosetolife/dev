import { object_property_exists } from "./object_property_exists.mjs";
export function app_code_batch_previous_exists(batch) {
  let v = object_property_exists(batch, "batch_path_previous");
  return v;
}
