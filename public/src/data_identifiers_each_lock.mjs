import { watch_lock } from "./watch_lock.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
export async function data_identifiers_each_lock(function_name, lambda) {
  let v = await watch_lock(async function () {
    let dis = await data_identifiers();
    let fns = object_property_get(dis, function_name);
    await each_async(fns, lambda);
  });
  return v;
}
