import { object_property_set } from "./object_property_set.mjs";
export function list_clear(list) {
  object_property_set(list, "length", 0);
}
