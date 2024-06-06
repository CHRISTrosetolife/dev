import { sleep } from "./sleep.mjs";
import { error } from "./error.mjs";
export async function retry(retries, lambda, retry_if_lambda) {
  let delay = 10;
  while (retries >= 1) {
    retries--;
    try {
      return await lambda();
    } catch (e) {
      if (retry_if_lambda(e)) {
        await sleep(delay * 1000);
        continue;
      }
      throw e;
    }
  }
  error("no retries left");
}
