import { identity } from "./identity.mjs";
export function list_to_lookup_value(list, mapped_value) {
  return list_to_lookup_value(list, identity, mapped_value);
}
