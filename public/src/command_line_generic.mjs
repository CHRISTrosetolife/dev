import { log } from "./log.mjs";
import { import_node } from "./import_node.mjs";
export async function command_line_generic(command, options) {
  let c = await import_node("child_process");
  let { spawn } = c;
  return await new Promise((resolve) => {
    spawn(command);
    let scriptOutput = "";
    child.stdout.setEncoding("utf8");
    child.stdout.on("data", function (data) {
      log(data);
      data = data.toString();
      scriptOutput += data;
    });
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", function (data) {
      console.log("stderr: " + data);
      data = data.toString();
      scriptOutput += data;
    });
    child.on("close", function (code) {
      console.log("closing code: " + code);
      console.log("Full output of script: ", scriptOutput);
    });
  });
}
