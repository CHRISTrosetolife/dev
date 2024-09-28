import { chalk } from "./chalk.mjs";
import { string_take } from "./string_take.mjs";
export function log_error_generic(fn, message) {
  return;
  message = string_take(message, 100);
  fn(chalk().redBright(message));
}
