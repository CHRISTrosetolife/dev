import { list_join_comma } from "./list_join_comma.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
export function html_hash_unparse(lookup_next) {
  let properties = object_properties(lookup_next);
  let mapped = list_map(properties, (p) =>
    string_combine_multiple([p, "=", object_property_get(lookup_next, p)]),
  );
  let joined = list_join_comma(mapped);
  return joined;
}
