import { command_line_exec } from "./command_line_exec.mjs";
export async function browser_open(url) {
  await command_line_exec(`start msedge ${url}`);
}
