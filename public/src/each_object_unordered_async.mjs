import { each_object_async_lambda } from "./each_object_async_lambda.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_map_unordered } from "./list_map_unordered.mjs";
export async function each_object_unordered_async(object, lambda) {
  let lambda_fn = each_async;
  await list_map_unordered(object, lambda_fn, lambda_each);
  let keys = object_properties(object);
  let v = await list_map_unordered(keys, async function (key) {
    let v2 = await each_object_async_lambda(object, key, lambda);
    return v2;
  });
  return v;
}
