import { add_1 } from "./add_1.mjs";
export async function retry(retry_count, lambda, retry_if_lambda) {
  let retries = add_1(retry_count);
  let result;
  while (retries >= 1) {
    retries--;
    try {
      result = await lambda();
      break;
    } catch (e) {
      if (retry_if_lambda(e)) {
        continue;
      }
      throw e;
    }
  }
  return result;
}
