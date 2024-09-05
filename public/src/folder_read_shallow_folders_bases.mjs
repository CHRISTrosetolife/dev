import { path_parse_base } from "./path_parse_base.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow_folders } from "./folder_read_shallow_folders.mjs";
export async function folder_read_shallow_folders_bases(p) {
  let folders = await folder_read_shallow_folders(p);
  let names = list_map(folders, path_parse_base);
  return names;
}
