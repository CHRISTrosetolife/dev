import { command_line } from "./command_line.mjs";
export async function restart() {
  await command_line("shutdown -t 0 -r");
}
