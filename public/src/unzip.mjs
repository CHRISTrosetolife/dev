import { command_line } from "./command_line.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function unzip(z_path) {
  let extension = ".zip";
  let output_path = string_suffix_without(z_path, extension);
  log(string_combine_multiple(["unzipping to ", output_path]));
  await folder_exists_ensure(output_path);
  let command = string_combine_multiple([
    'tar -xf "',
    z_path,
    '" -C "',
    output_path,
    '"',
  ]);
  await command_line(command);
}
