import { object_property_get } from "./object_property_get.mjs";
export function storage_local_keys_size() {
  return object_property_get(localStorage, "length");
}
