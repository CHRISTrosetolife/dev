import { list_first_remaining } from "./list_first_remaining.mjs";
import { log_error } from "./log_error.mjs";
import { log } from "./log.mjs";
import { import_node } from "./import_node.mjs";
import { string_split_space } from "./string_split_space.mjs";
export async function command_line_generic(command, options) {
  let c = await import_node("child_process");
  let { spawn } = c;
  return await new Promise((resolve) => {
    let { first, remaining } = list_first_remaining(
      string_split_space(command),
    );
    let child = spawn(first, remaining);
    child.stdout.setEncoding("utf8");
    child.stdout.on("data", function (data) {
      log(data);
    });
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", function (data) {
      log_error(data);
    });
    child.on("close", function (code) {
      resolve();
    });
  });
}
