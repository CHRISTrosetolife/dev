import { command_line } from "./command_line.mjs";
export async function github_cli_install() {
  let command = "gh --version";
  try {
    await command_line(command);
  } catch (e) {
    let v = true;
    return v;
  }
  let v2 = false;
  return v2;
}
