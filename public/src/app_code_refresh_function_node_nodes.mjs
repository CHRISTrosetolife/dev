import { map_new } from "./map_new.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_node_nodes(args) {
  let data = object_property_get(args, "data");
  let nodes = object_property_initialize(data, "nodes", map_new());
  return nodes;
}
