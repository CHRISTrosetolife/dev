import { command_line } from "./command_line.mjs";
export async function github_cli_install() {
  try {
    await command_line("gh --version");
  } catch (e) {}
}
