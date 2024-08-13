import { object_property_get } from "./object_property_get.mjs";
import { list_any } from "./list_any.mjs";
export function list_any_created(results) {
  let created = list_any(results, (r) => object_property_get(r, "created"));
  return {
    created,
  };
}
