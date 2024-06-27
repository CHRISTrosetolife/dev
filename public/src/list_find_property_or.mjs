import { list_find_property_or_generic } from "./list_find_property_or_generic.mjs";
export function list_find_property_or(list, property_name, value, or_value) {
  return list_find_property_or_generic(
    list,
    property_name,
    value,
    or_value,
    true,
  );
}
