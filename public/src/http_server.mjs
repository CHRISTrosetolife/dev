import { command_line_exec } from "./command_line_exec.mjs";
export async function http_server() {
  await command_line_exec("http-server");
}
