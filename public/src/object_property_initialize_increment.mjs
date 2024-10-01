import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function object_property_initialize_increment(
  index,
  property_name,
  value_intial,
) {
  let value = object_property_initialize(
    index,
    property_name,
    value_intial - 1,
  );
  value++;
  object_property_set(index, property_name, value);
  return value;
}
