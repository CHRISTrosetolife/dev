import { list_to_groups_key_value } from "./list_to_groups_key_value.mjs";
import { identity } from "./identity.mjs";
export function list_to_groups(messages, key_get) {
  let value_get = identity;
  let result = list_to_groups_key_value(messages, key_get, value_get);
  return result;
}
