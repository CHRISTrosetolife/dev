import { folder_read_generic } from "./folder_read_generic.mjs";
export async function folder_read_shallow_extensions(folder, file_extensions) {
  let recursive = false;
  let files = await folder_read_generic(folder, file_extensions, recursive);
  return files;
}
