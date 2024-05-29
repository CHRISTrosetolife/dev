import { log } from "./log.mjs";
import b from "beepbeep";
export function beep() {
  log({
    b,
  });
  b();
  b(2);
  b(3, 1000);
  b([1000, 500, 2000]);
}
