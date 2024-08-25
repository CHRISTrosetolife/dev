import { folder_read_each_generic } from "./folder_read_each_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function folder_read_each(
  input_directory,
  file_extension,
  lambda,
) {
  let filter = tautology;
  await folder_read_each_generic(
    input_directory,
    file_extension,
    filter,
    lambda,
  );
}
