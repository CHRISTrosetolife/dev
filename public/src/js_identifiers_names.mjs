import { list_map_property } from "./list_map_property.mjs";
export function js_identifiers_names(args) {
  return list_map_property(args, "name");
}
