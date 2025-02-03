import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function storage_local_key(fn_namespace, key) {
  assert(function_is, [fn_namespace]);
  return list_join_space([object_property_get(fn_namespace, "name"), key]);
}
