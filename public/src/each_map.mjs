import { map_get } from "./map_get.mjs";
import { map_properties } from "./map_properties.mjs";
import { each_object_generic } from "./each_object_generic.mjs";
export function each_map(selected, each_lambda) {
  each_object_generic(map_properties, map_get, selected, each_lambda);
}
