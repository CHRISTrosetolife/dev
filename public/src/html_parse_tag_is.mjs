import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_parse_tag_is(parent) {
  return list_includes(["script", "tag"], object_property_get(parent, "type"));
}
