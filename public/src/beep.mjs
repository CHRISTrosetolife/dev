import { log } from "./log.mjs";
import b from "beepbeep";
export function beep() {
  log({
    b,
  });
  beep();
  beep(2);
  beep(3, 1000);
  beep([1000, 500, 2000]);
}
