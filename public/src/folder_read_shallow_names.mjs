import { path_parse_name } from "./path_parse_name.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function folder_read_shallow_names(p, extension) {
  let zips = await folder_read_shallow(p, extension);
  let zip_names = list_map(zips, path_parse_name);
  return zip_names;
}
