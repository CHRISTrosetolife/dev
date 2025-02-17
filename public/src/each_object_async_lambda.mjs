import { object_property_get } from "./object_property_get.mjs";
export async function each_object_async_lambda(object, key, lambda) {
  let value = object_property_get(object, key);
  await lambda(key, value);
}
