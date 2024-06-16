import { on_keypress_initialize } from "./on_keypress_initialize.mjs";
export function on_keypress(on) {
  on_keypress_initialize();
  process.stdin.on("keypress", on);
}
