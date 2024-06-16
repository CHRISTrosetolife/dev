import { command_line } from "./command_line.mjs";
export async function http_server() {
  await command_line("http-server");
}
