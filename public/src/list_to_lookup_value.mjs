import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_lookup_value(list, mapped_value) {
  return list_to_lookup_key_value(list, identity, mapped_value);
}
