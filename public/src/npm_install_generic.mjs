import { command_line_exec } from "./command_line_exec.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function npm_install_generic(package_name, suffix) {
  return await command_line_exec(
    string_combine_multiple(["npm install ", package_name, "@latest", suffix]),
  );
}
