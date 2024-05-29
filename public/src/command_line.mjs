import { error } from "./error.mjs";
import { import_node } from "./import_node.mjs";
import { exec } from "child_process";
export async function command_line(command) {
  let c = await import_node("child_process");
  return await new Promise((resolve) => {
    exec(
      command,
      (error, stdout, stderr) => {
        resolve({
          error,
          stdout,
          stderr,
        });
      },
      {},
    );
  });
}
