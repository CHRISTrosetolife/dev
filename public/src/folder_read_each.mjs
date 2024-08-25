import { tautology } from "./tautology.mjs";
import { each_async } from "./each_async.mjs";
import { folder_read } from "./folder_read.mjs";
export async function folder_read_each(
  input_directory,
  file_extension,
  lambda,
) {
  let filter = tautology;
  let file_paths = await folder_read(input_directory, file_extension);
  await each_async(file_paths, lambda);
}
