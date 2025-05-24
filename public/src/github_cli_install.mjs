import { command_line_errors } from "./command_line_errors.mjs";
export async function github_cli_install() {
  let command = "gh --version";
  let v = await command_line_errors(command);
  return v;
}
