import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_find_property_or_generic } from "./list_find_property_or_generic.mjs";
export function list_find_property_or(list, property_name, value, or_value) {
  assert_arguments_length(arguments, 4);
  return list_find_property_or_generic(
    list,
    property_name,
    value,
    or_value,
    true,
  );
}
