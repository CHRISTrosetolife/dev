import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_all } from "./list_all.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_properties_match(matcher, target) {
  let matcher_properties = object_properties(matcher);
  list_all(
    matcher_properties,
    (p) =>
      object_property_exists(target, p) &&
      object_property_get(target, p) == object_property_get(matcher, p),
  );
}
