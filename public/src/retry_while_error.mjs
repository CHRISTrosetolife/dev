import { log_error } from "./log_error.mjs";
export async function retry_while_error(lambda) {
  let success = false;
  while (!success) {
    try {
      await lambda();
      success = true;
    } catch (e) {
      log_error({
        e,
      });
    }
  }
}
