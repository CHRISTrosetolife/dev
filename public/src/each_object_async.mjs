import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
import { object_properties } from "./object_properties.mjs";
export async function each_object_async(object, lambda_each) {
  let lambda_fn = each_async;
  let keys = object_properties(object);
  await lambda_fn(keys, async function (key) {
    let value = object_property_get(object, key);
    await lambda_each(key, value);
  });
}
