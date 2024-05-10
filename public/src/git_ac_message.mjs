import { command_line_git } from "./command_line_git.mjs";
export async function git_ac_message(commit_message) {
  let commands = [
    "add *",
    `commit -m "${new Date().toISOString()}${commit_message}"`,
  ];
  for (let command of commands) {
    await command_line_git(command);
  }
}
