import { folder_read_filter } from "./folder_read_filter.mjs";
import { each_async } from "./each_async.mjs";
export async function folder_read_each_generic(
  input_directory,
  file_extension,
  lambda,
  filter,
) {
  let filtered = await folder_read_filter(
    input_directory,
    file_extension,
    filter,
  );
  await each_async(filtered, lambda);
}
