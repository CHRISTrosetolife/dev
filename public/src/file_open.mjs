import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  await command_line(`code ${file_name}`);
}
