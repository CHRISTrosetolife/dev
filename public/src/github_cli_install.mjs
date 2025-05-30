import { command_line } from "./command_line.mjs";
import { command_line_errors } from "./command_line_errors.mjs";
export async function github_cli_install() {
  let command = "gh --version";
  if (await command_line_errors(command)) {
    let v2 = await command_line(
      "winget install --id GitHub.cli -e --accept-package-agreements --accept-source-agreements",
    );
    return v2;
  }
  let v = await command_line(command);
  return v;
}
