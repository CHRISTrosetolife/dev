import { command_line_generic } from "./command_line_generic.mjs";
export async function powershell(command) {
  let options = {
    shell: "powershell.exe",
  };
  return await command_line_generic(command, options);
}
