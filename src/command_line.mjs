import {exec} from "child_process";
export async function command_line(command) {
  return await new Promise(resolve => {
    exec(command, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr
      });
    });
  });
}
