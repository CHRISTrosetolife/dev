import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line_git(args) {
  await command_line_generic(`git ${args}`, true);
}
