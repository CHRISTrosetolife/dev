import { storage_local_initialize_lambda } from "./storage_local_initialize_lambda.mjs";
export function storage_local_initialize(fn_namespace, key, value) {
  return storage_local_initialize_lambda(fn_namespace, key, () => value);
}
