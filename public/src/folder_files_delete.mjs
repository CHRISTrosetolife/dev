import { folder_read_each } from "./folder_read_each.mjs";
import { file_delete } from "./file_delete.mjs";
export async function folder_files_delete(input_directory, file_extension) {
  await folder_read_each(input_directory, file_extension, file_delete);
}
