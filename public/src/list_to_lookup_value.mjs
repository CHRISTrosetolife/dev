import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup_value(list, value_mapper) {
  return list_to_lookup_key_value(list, identity, value_mapper);
}
