import { path_parse_name } from "./path_parse_name.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_path_parse_name(zips) {
  let v = list_map(zips, path_parse_name);
  return v;
}
