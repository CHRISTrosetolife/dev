import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_read_filter(
  input_directory,
  file_extension,
  filter,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  let filtered = list_filter(file_paths, filter);
  return filtered;
}
