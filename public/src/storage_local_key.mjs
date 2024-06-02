import { list_join_space } from "./list_join_space.mjs";
export function storage_local_key(fn_namespace, key) {
  return list_join_space([fn_namespace.name, key]);
}
