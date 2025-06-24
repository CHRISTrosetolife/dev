import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function computer_shutdown_generic(flag) {
  await command_line(string_combine_multiple(["shutdown -t 0 -", flag]));
}
