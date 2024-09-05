import { folder_is } from "./folder_is.mjs";
import { list_filter_async } from "./list_filter_async.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function folder_read_shallow_folders(p) {
  let all = await folder_read_shallow(p, "");
  let folders = await list_filter_async(all, folder_is);
  return folders;
}
