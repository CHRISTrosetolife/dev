import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
export async function powershell(command) {
  let options = {
    shell: "powershell.exe",
  };
  let c = await import_node("child_process");
  let { exec } = c;
  return await new Promise((resolve) => {
    exec(command, options, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr,
      });
    });
  });
  return await command_line_generic(command, options);
}
