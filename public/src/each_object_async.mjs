import { each_async } from "./each_async.mjs";
import { each_object_async_lambda } from "./each_object_async_lambda.mjs";
import { log } from "./log.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_index } from "./list_index.mjs";
import { list_size } from "./list_size.mjs";
export async function each_object_async(object, lambda) {
  let keys = object_properties(object);
  await each_async(list, async function (item) {});
  for (let key of keys) {
    if (false) {
      log({
        i: list_index(keys, key),
        s: list_size(keys),
      });
    }
    await each_object_async_lambda(object, key, lambda);
  }
}
