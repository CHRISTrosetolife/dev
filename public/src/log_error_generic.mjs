import { chalk } from "./chalk.mjs";
export function log_error_generic(fn, message) {
  fn(chalk().redBright(message));
}
