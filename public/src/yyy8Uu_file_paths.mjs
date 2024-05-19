import { list_single } from "./list_single.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
import { yyy8Uu_path_base } from "./yyy8Uu_path_base.mjs";
export async function yyy8Uu_file_paths() {
  let folder_path = yyy8Uu_path_base();
  let symlinks = await folder_read(string_combine(folder_path, "symlinks"), "");
  return await list_map_async(symlinks, async (s) => {
    let dirname = path_dirname(s);
    let contents = await file_read(s);
    let joined = path_join([dirname, contents]);
    let xmls = await folder_read(joined, ".xml");
    let filtered = list_filter(xmls, (f) => string_includes(f, "\\cod-"));
    return list_single(filtered);
  });
}
