import { each_async } from "./each_async.mjs";
import { each_object_async_lambda } from "./each_object_async_lambda.mjs";
import { object_properties } from "./object_properties.mjs";
export async function each_object_async(object, lambda_each) {
  let keys = object_properties(object);
  await each_async(keys, async function (key) {
    await each_object_async_lambda(object, key, lambda_each);
  });
}
