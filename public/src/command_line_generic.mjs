import { log } from "./log.mjs";
import { json_from } from "./json_from.mjs";
import { log_write } from "./log_write.mjs";
import { log_error } from "./log_error.mjs";
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
      child.stdout.setEncoding("utf8");
      child.stdout.on("data", function (data) {
        try {
          log({
            data,
          });
          data = json_from(data);
        } catch (e) {
          log_error(e);
        }
        log_write(data);
      });
      child.stderr.setEncoding("utf8");
      child.stderr.on("data", function (data) {
        log_error(data);
      });
    }
    child.on("close", function (code) {
      resolve();
    });
  });
}
