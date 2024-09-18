import { log_error_write } from "./log_error_write.mjs";
import { log_write } from "./log_write.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, silent) {
  let c = await import_node("child_process");
  let { spawn } = c;
  return await new Promise((resolve) => {
    let { first, remaining } = list_first_remaining(
      string_split_space(command),
    );
    let child = spawn(first, remaining);
    if (!silent) {
      let { stdout, stderr } = child;
      stdout.setEncoding("utf8");
      stdout.on("data", function (data) {
        log_write(data);
      });
      stderr.setEncoding("utf8");
      stderr.on("data", function (data) {
        log_error_write(data);
      });
    }
    child.on("close", function (code) {
      resolve();
    });
  });
}
