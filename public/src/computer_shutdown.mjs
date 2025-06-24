import { computer_shutdown_generic } from "./computer_shutdown_generic.mjs";
export async function computer_shutdown() {
  await computer_shutdown_generic("s");
}
