import { computer_shutdown_generic } from "./computer_shutdown_generic.mjs";
export async function computer_restart() {
  let flag = "r";
  await computer_shutdown_generic(flag);
}
