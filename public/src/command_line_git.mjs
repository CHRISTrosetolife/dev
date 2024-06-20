import { command_line_exec } from "./command_line_exec.mjs";
import { log } from "./log.mjs";
export async function command_line_git(args) {
  let command = `git ${args}`;
  log({
    command,
  });
  await command_line_exec(command);
}
