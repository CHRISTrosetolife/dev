import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup(list, mapper_key) {
  let mapped_value = identity;
  return list_to_lookup_key_value(list, mapper_key, mapped_value);
}
