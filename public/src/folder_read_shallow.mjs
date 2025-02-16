import { folder_read_generic } from "./folder_read_generic.mjs";
export async function folder_read_shallow(folder, file_extension) {
  let recursive = false;
  let files = await folder_read_generic(folder, [file_extension], recursive);
  return files;
}
