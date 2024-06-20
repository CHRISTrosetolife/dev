import { command_line_exec } from "./command_line_exec.mjs";
export async function command_line_git(args) {
  let command = `git ${args}`;
  await command_line_exec(command);
}
