import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
export function storage_local_exists_not(fn_namespace, key) {
  assert_arguments_length(arguments, 2);
  return !storage_local_exists(fn_namespace, key);
}
