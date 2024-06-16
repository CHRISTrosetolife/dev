import { chalk } from "./chalk.mjs";
import { log } from "./log.mjs";
export function log_error(message) {
  log(chalk().redBright(message));
}
