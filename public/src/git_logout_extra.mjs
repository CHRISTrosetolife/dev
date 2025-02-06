import { command_line_git } from "./command_line_git.mjs";
export async function git_logout_extra() {
  await command_line_git("credential-manager github logout 158495363");
}
