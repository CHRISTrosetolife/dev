import { chalk } from "./chalk.mjs";
import { log } from "./log.mjs";
export function log_error(message) {
  let fn = log;
  fn(chalk().redBright(message));
}
