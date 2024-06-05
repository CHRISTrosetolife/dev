export async function retry(retries, lambda, retry_if_lambda) {
  let result;
  while (retries >= 1) {
    if (retries <= 0) {
    }
    try {
      result = await lambda();
      break;
    } catch (e) {
      if (retry_if_lambda(e)) {
        retries--;
        continue;
      }
      throw e;
    }
  }
  return result;
}
