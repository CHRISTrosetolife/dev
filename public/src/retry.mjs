import { error } from "./error.mjs";
export async function retry(retries, lambda, retry_if_lambda) {
  let result;
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
  if (retries <= 0) {
    error("no retries left");
  }
  return result;
}
