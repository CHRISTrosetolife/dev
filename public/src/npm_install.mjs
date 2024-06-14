import { command_line } from "./command_line.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function npm_install(package_name) {
  let suffix = "";
  return await command_line(
    string_combine_multiple(["npm install ", package_name, "@latest"]),
  );
}
