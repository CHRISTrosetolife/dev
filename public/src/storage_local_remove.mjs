import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_remove(fn_namespace, key) {
  assert_arguments_length(arguments, 2);
  localStorage.removeItem(storage_local_key(fn_namespace, key));
}
