import { dir } from "./dir.mjs";
import { unzip_folder } from "./unzip_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { file_exists } from "./file_exists.mjs";
export async function unzip(path_input) {
  let output_path = unzip_folder(path_input);
  if (await file_exists(output_path)) {
    return output_path;
  }
  log(string_combine_multiple(["unzipping to ", output_path]));
  await folder_exists_ensure(output_path);
  let command = string_combine_multiple([
    "tar -xf ",
    path_input,
    " -C ",
    output_path,
    "",
  ]);
  await dir(command);
  return output_path;
}
