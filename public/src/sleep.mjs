import { timeout_set } from "./timeout_set.mjs";
export function sleep(ms) {
  return new Promise((resolve) => {
    timeout_set(resolve, ms);
  });
}
