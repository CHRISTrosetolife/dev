import { dir } from "./dir.mjs";
export async function computer_restart() {
  await dir("shutdown -t 0 -r");
}
