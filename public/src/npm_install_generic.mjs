import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function npm_install_generic(package_name, suffix) {
  return await command_line(
    string_combine_multiple(["npm install ", package_name, "@latest", suffix]),
  );
}
