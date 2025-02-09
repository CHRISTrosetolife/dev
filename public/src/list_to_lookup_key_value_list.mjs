import { list_add_if_exists_not } from "./list_add_if_exists_not.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
export function list_to_lookup_key_value_list(pairs, key_mapper, value_mapper) {
  return list_to_lookup_key_value(pairs, key_mapper, (pair, result) => {
    let key = key_mapper(pair);
    let value = value_mapper(pair);
    let list = object_property_initialize(result, key, []);
    list_add_if_exists_not(list, value);
    return list;
  });
}
