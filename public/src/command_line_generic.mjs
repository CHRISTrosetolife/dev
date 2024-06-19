import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, options) {
  let c = await import_node("child_process");
  let { spawn } = c;
  return await new Promise((resolve) => {
    spawn(command);
  });
}
