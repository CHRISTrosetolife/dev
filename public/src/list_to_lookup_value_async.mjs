import { list_to_lookup_key_value_async } from "./list_to_lookup_key_value_async.mjs";
import { identity } from "./identity.mjs";
export async function list_to_lookup_value_async(list, mapped_value) {
  return await list_to_lookup_key_value_async(list, identity, mapped_value);
}
