import { each_async } from "./each_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_read_each_generic(
  input_directory,
  file_extension,
  filter,
  lambda,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  let filtered = list_filter(file_paths, filter);
  await each_async(filtered, lambda);
}
