import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup(list, mapper_key) {
  let mapper_value = identity;
  let v = list_to_lookup_key_value(list, mapper_key, mapper_value);
  return v;
}
