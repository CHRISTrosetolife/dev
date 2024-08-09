import { command_line_git } from "./command_line_git.mjs";
export async function git_push() {
  return await command_line_git("push");
}
