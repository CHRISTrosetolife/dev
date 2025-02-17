import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { json_to } from "./json_to.mjs";
import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_set(fn_namespace, key, value) {
  assert_arguments_length(arguments, 3);
  let json = json_to(value);
  localStorage.setItem(storage_local_key(fn_namespace, key), json);
}
