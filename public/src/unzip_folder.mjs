import { string_suffix_without } from "./string_suffix_without.mjs";
export function unzip_folder(path_input) {
  let extension = ".zip";
  let output_path = string_suffix_without(path_input, extension);
  return output_path;
}
