import { file_copy_path_generic } from "./file_copy_path_generic.mjs";
import { identity } from "./identity.mjs";
export function file_copy_path(file_path, output_directory) {
  return file_copy_path_generic(file_path, output_directory, identity);
}
