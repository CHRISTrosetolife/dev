import { list_map_async } from "./list_map_async.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_read } from "./folder_read.mjs";
import { yyy8Uu_path_base } from "./yyy8Uu_path_base.mjs";
export async function yyy8Uu_symlinks(each_symlink) {
  let folder_path = yyy8Uu_path_base();
  let symlinks = await folder_read(string_combine(folder_path, "symlinks"), "");
  return await list_map_async(symlinks, each_symlink);
}
