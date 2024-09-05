import { unzip } from "./unzip.mjs";
import { list_includes } from "./list_includes.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { each_async } from "./each_async.mjs";
import { folder_read_shallow_folders_bases } from "./folder_read_shallow_folders_bases.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function folder_unzip(p) {
  let extension = ".zip";
  let z_paths = await folder_read_shallow(p, extension);
  let folder_names = await folder_read_shallow_folders_bases(p);
  await each_async(z_paths, async (z_path) => {
    let zip_name = path_parse_name(z_path);
    if (list_includes(folder_names, zip_name)) {
      return;
    }
    await unzip(z_path);
  });
}
