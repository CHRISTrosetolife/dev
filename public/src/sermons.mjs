import { path_parse_name } from "./path_parse_name.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read } from "./folder_read.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
export async function sermons() {
  let paths = await folder_read(sermon_folder(), ".txt");
  return list_map(paths, path_parse_name);
}
