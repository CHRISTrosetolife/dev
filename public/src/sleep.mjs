import { timeout_set } from "./timeout_set.mjs";
export async function sleep(milliseconds) {
  return await new Promise((resolve) => {
    timeout_set(resolve, milliseconds);
  });
}
