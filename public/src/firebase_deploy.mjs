import { command_line } from "./command_line.mjs";
export async function firebase_deploy() {
  return await command_line("firebase deploy");
}
