import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, options) {
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
}
