import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
import { yyy8Uu_path_base } from "./yyy8Uu_path_base.mjs";
export async function yyy8Uu_file_paths() {
  let path = yyy8Uu_path_base();
  let files = await folder_read(path, ".xml");
  let filtered = list_filter(files, (f) => string_includes(f, "\\cod-"));
  return filtered;
}
