import { command_line } from "./command_line.mjs";
export async function firebase_deploy() {
  await command_line("firebase deploy");
}
