import { file_copy_closed } from "./file_copy_closed.mjs";
import { folder_files_move_generic } from "./folder_files_move_generic.mjs";
export async function folder_files_copy_generic(
  input_directory,
  file_extension,
  output_directory,
  filter,
  map,
) {
  let lambda = async (from, to) => {
    let to_mapped = await map(to);
    await file_copy_closed(from, to_mapped);
  };
  await folder_files_move_generic(
    input_directory,
    file_extension,
    output_directory,
    lambda,
    filter,
  );
}
