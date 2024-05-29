import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
export async function spawn(command, options) {
  let c = await import_node("child_process");
  let { spawn } = c;
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
