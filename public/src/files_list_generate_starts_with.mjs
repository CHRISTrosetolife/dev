import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { list_map } from "./list_map.mjs";
export async function files_list_generate_starts_with(
  input_path,
  file_extension,
  prefix,
  name,
) {
  let files = await folder_read_shallow(input_path, file_extension);
  let m = list_map(files, path_parse_name);
  let filtered = list_filter_starts_with(m, prefix);
  await generate_list_generic(filtered, name);
}
