import { list_map_property } from "./list_map_property.mjs";
export function js_identifiers_to_names(params) {
  let v = list_map_property(params, "name");
  return v;
}
