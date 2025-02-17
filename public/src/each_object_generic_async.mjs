import { object_property_get } from "./object_property_get.mjs";
import { object_properties } from "./object_properties.mjs";
export async function each_object_generic_async(
  object,
  lambda_fn,
  lambda_each,
) {
  let keys = object_properties(object);
  await lambda_fn(keys, async function (key) {
    let value = object_property_get(object, key);
    let v = await lambda_each(key, value);
    return v;
  });
}
