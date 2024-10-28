import { each_async } from "./each_async.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function list_to_lookup_key_value_async(
  list,
  mapper_key,
  mapped_value,
) {
  let lookup = {};
  await each_async(list, async (w) => {
    object_property_set(lookup, await mapper_key(w), await mapped_value(w));
  });
  return lookup;
}
