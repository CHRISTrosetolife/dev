import { command_line_exec } from "./command_line_exec.mjs";
export async function firebase_deploy() {
  return await command_line_exec("firebase deploy");
}
