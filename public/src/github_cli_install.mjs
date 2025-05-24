import { command_line } from "./command_line.mjs";
export async function github_cli_install() {
  try {
    await command_line("gh --version");
  } catch (e) {
    let v = true;
    return v;
  }
  let v2 = false;
  return v2;
}
