import { error } from "./error.mjs";
import { list_add } from "./list_add.mjs";
import { log_error_write } from "./log_error_write.mjs";
import { log_write } from "./log_write.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, silent) {
  let c = await import_node("child_process");
  let { spawn } = c;
  let v = await new Promise(function (resolve, reject) {
    let result = {
      stdout: [],
      stderr: [],
    };
    let { first, remaining } = list_first_remaining(
      string_split_space(command),
    );
    let child = spawn(first, remaining);
    if (!silent) {
      let { stdout, stderr } = child;
      stdout.setEncoding("utf8");
      stdout.on("data", function (data) {
        log_write(data);
        list_add(result.stdout, data);
      });
      stderr.setEncoding("utf8");
      stderr.on("data", function (data) {
        log_error_write(data);
        list_add(result.stderr, data);
      });
    }
    child.on("close", function (code2) {
      if (code2 !== 0) {
        reject({
          code2,
        });
      } else {
        resolve(code2);
      }
    });
    child.on("error", function (error) {
      reject({
        error,
      });
    });
  });
  return v;
}
