import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { sleep } from "./sleep.mjs";
import { error } from "./error.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function retry(retries, lambda, retry_if_lambda) {
  let delay = 10;
  let errors = [];
  while (retries >= 1) {
    retries--;
    try {
      let result = await lambda();
      return result;
    } catch (e) {
      if (retry_if_lambda(e)) {
        await sleep(delay * 1000);
        delay *= 2;
        list_add(errors, e);
        continue;
      }
      throw e;
    }
  }
  error(
    string_combine_multiple(["no retries left: ", list_join_space(errors)]),
  );
}
