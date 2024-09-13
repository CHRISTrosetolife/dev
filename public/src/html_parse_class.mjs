import { object_property_get_or_null } from "./object_property_get_or_null.mjs";
export function html_parse_class(c) {
  let { attribs } = c;
  let class_value = object_property_get_or_null(attribs, "class");
  return class_value;
}
