import { object_properties } from "./object_properties.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
export async function each_object_unordered_async(object, lambda) {
  let keys = object_properties(object);
  let v = await list_map_unordered(keys, $A$KEY);
  return v;
}
