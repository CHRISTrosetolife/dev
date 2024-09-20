import { log_error } from "./log_error.mjs";
export async function retry_while_error(lambda) {
  let break_on_success = true;
  let success = false;
  while (!success) {
    try {
      await lambda();
      if (false) {
        success = true;
      }
    } catch (e) {
      log_error({
        e,
      });
    }
  }
}
