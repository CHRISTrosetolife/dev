import { command_line_git_options } from "./command_line_git_options.mjs";
export async function command_line_git_cwd(command, cwd) {
  await command_line_git_options(command, {
    cwd: cwd,
  });
}
