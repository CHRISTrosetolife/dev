import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup(list, mapper_key) {
  let mapped_value = identity;
  return list_to_lookup_value(list, mapper_key, mapped_value);
}
