import { object_property_get } from "./object_property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function storage_local_key(fn_namespace, key) {
  object_property_get(object, "property_name");
  return list_join_space([fn_namespace.name, key]);
}
