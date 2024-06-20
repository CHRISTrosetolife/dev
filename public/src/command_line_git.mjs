import { log } from "./log.mjs";
import { command_line_silent } from "./command_line_silent.mjs";
export async function command_line_git(args) {
  let command = `git ${args}`;
  log({
    command,
  });
  await command_line_silent(command);
}
