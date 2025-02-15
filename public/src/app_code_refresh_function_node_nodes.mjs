import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
import { map_new } from "./map_new.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_node_nodes(args) {
  let data = object_property_get(args, "data");
  let nodes = object_property_initialize_get(data, "nodes", map_new());
  return nodes;
}
