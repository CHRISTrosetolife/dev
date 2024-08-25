import { each } from "./each.mjs";
import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_read_each_generic(
  input_directory,
  file_extension,
  lambda,
  filter,
) {
  let file_paths = await folder_read(input_directory, file_extension);
  log({
    filter,
  });
  let filtered = list_filter(file_paths, filter);
  each(list, (item) => {
    log({
      item,
    });
  });
  exit();
  await each_async(filtered, lambda);
}
