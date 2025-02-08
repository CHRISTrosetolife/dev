import { string_slash_normalize_right } from "./string_slash_normalize_right.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_path_suffix } from "./function_path_suffix.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import { list_map } from "./list_map.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { folder_read } from "./folder_read.mjs";
import { web_is } from "./web_is.mjs";
import { global_get } from "./global_get.mjs";
import { object_properties } from "./object_properties.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export async function functions_names() {
  let suffix = function_path_suffix();
  if (web_is()) {
    let { files } = global_get();
    let fps = object_properties(files);
    fps = list_filter(fps, (fp) => string_ends_with(fp, suffix));
    let result = list_map(fps, function_path_to_name);
    return result;
  }
  let prefix = folder_path_src();
  let files = await folder_read(prefix, suffix);
  let mapped = list_map(files, (file_path) => {
    let replaced = string_slash_normalize_right(file_path);
    let mapped2 = string_prefix_without(replaced, prefix);
    let mapped3 = string_suffix_without(mapped2, suffix);
    return mapped3;
  });
  return mapped;
}
