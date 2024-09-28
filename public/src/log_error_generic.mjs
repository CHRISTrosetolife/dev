import { chalk } from "./chalk.mjs";
import { string_take } from "./string_take.mjs";
export function log_error_generic(fn, message) {
  message = string_take(message, 1);
  fn(chalk().redBright(message));
}
