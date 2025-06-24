import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function data_functions_async_is(functions, name) {
  if (object_property_exists(functions, name)) {
    let f = object_property_get(functions, name);
    let { async } = f;
    if (async) {
      let v = true;
      return v;
    }
  }
  let v2 = false;
  return v2;
}
