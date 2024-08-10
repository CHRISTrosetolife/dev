import { log_error } from "./log_error.mjs";
export async function repeat(lambda) {
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
