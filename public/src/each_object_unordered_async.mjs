import { each_object_generic_async } from "./each_object_generic_async.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
export async function each_object_unordered_async(object, lambda_each) {
  let lambda_fn = list_map_unordered;
  let v3 = await each_object_generic_async(object, lambda_fn, lambda_each);
  return v3;
}
