import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
export async function http_server() {
  log(http_server.name);
  await command_line_exec("http-server");
  log(string_combine_multiple([http_server.name, " ended"]));
}
