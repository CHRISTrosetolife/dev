import { yyy8Uu_path_base } from "./yyy8Uu_path_base.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { string_includes } from "./string_includes.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox() {
  let index = 0;
  let path = yyy8Uu_path_base();
  let files = await folder_read(path, ".xml");
  let filtered = list_filter(files, (f) => string_includes(f, "\\cod-"));
  return await yyy8Uu_file_path_to_parts(filtered, index);
}
