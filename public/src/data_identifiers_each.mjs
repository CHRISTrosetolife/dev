import { list_map_async } from "./list_map_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_identifiers } from "./data_identifiers.mjs";
export async function data_identifiers_each(function_name, lambda) {
  let dis = await data_identifiers();
  let fns = object_property_get(dis, function_name);
  let v = await list_map_async(fns, async function (f_name) {
    await lambda(f_name);
  });
  return v;
}
