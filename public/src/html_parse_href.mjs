import { object_property_get } from "./object_property_get.mjs";
export function html_parse_href(i) {
  return object_property_get(i.attribs, "href");
}
