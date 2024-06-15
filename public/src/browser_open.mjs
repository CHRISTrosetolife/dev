import { command_line } from "./command_line.mjs";
export async function browser_open(url) {
  await command_line(`start msedge ${url}`);
}
