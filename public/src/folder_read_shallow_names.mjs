import { list_map_path_parse_name } from "./list_map_path_parse_name.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function folder_read_shallow_names(p, extension) {
  let zips = await folder_read_shallow(p, extension);
  let zip_names = list_map_path_parse_name(zips);
  return zip_names;
}
