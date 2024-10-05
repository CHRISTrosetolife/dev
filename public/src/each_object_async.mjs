import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_index } from "./list_index.mjs";
import { list_size } from "./list_size.mjs";
export async function each_object_async(object, lambda) {
  let keys = object_properties(object);
  for (let key of keys) {
    let value = object_property_get(object, key);
    await lambda(key, value);
    log({
      i: list_index(keys, key),
      s: list_size(keys),
    });
  }
}
