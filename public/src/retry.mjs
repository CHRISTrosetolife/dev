import { error } from "./error.mjs";
export async function retry(retries, lambda, retry_if_lambda) {
  while (retries >= 1) {
    retries--;
    try {
      return await lambda();
    } catch (e) {
      if (retry_if_lambda(e)) {
        continue;
      }
      throw e;
    }
  }
  error("no retries left");
}
