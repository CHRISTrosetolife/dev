import { string_take } from "./string_take.mjs";
import { log_error_generic } from "./log_error_generic.mjs";
import { log } from "./log.mjs";
export function log_error(message) {
  let truncated = string_take(message, 1000);
  let fn = log;
  log_error_generic(fn, message);
}
