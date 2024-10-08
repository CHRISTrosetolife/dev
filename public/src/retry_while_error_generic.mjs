import { log } from "./log.mjs";
import { log_error } from "./log_error.mjs";
export async function retry_while_error_generic(lambda, break_on_success) {
  let success = false;
  while (!success) {
    try {
      await lambda();
      log({lambda});
      if (break_on_success) {
        success = true;
      }
    } catch (e) {
      log_error({
        e,
      });
    }
  }
}
