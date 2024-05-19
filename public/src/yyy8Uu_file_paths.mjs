import { yyy8Uu_symlinks } from "./yyy8Uu_symlinks.mjs";
import { list_single } from "./list_single.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
export async function yyy8Uu_file_paths() {
  return await yyy8Uu_symlinks(each_symlink);
  async function each_symlink(s) {
    let dirname = path_dirname(s);
    let contents = await file_read(s);
    let joined = path_join([dirname, contents]);
    let xmls = await folder_read(joined, ".xml");
    let filtered = list_filter(xmls, (f) => string_includes(f, "\\cod-"));
    return list_single(filtered);
  }
}
