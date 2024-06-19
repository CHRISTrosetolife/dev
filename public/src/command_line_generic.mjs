import { spawn } from "./spawn.mjs";
import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, options) {
  let c = await import_node("child_process");
  let { spawn } = c;
  return await new Promise(async (resolve) => {
    await spawn(command, options, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr,
      });
    });
  });
}
