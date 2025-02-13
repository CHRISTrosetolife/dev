import { git_repo_name } from "./git_repo_name.mjs";
import { github_username } from "./github_username.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line_git_multiple } from "./command_line_git_multiple.mjs";
export async function git_link() {
  let commands = [
    "init",
    string_combine_multiple([
      "remote set-url origin git@github.com:",
      github_username(),
      "/",
      git_repo_name(),
      ".git",
    ]),
    "push origin main",
  ];
  return await command_line_git_multiple(commands);
}
