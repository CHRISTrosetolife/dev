import { path_parse_name } from "./path_parse_name.mjs";
import { folder_read } from "./folder_read.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { list_map } from "./list_map.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function files_list_generate_starts_with(
  input_path,
  file_extension,
  prefix,
  name,
) {
  let files = await folder_read(input_path, file_extension);
  let m = list_map(files, path_parse_name);
  let mapped = list_map(files, (f) => {
    let n = path_parse_name();
    return string_starts_with(f, prefix);
  });
  await generate_list_generic(mapped, name);
}
