import { sleep } from "./sleep.mjs";
import { log } from "./log.mjs";
import { on_keypress } from "./on_keypress.mjs";
export async function on_keypress_log() {
  on_keypress((chunk, key) =>
    log({
      chunk,
      key,
    }),
  );
  await sleep(100000);
}
