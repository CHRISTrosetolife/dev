import { each_object_generic_async } from "./each_object_generic_async.mjs";
import { each_async } from "./each_async.mjs";
export async function each_object_async(object, lambda_each) {
  let lambda_fn = each_async;
  await each_object_generic_async(object, lambda_fn, lambda_each);
}
