import { each } from "./each.mjs";
import { map_properties } from "./map_properties.mjs";
export function map_properties_each(selected, each_lambda) {
  let properties = map_properties(selected);
  each(properties, each_lambda);
}
