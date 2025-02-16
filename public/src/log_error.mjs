import { log_error_generic } from "./log_error_generic.mjs";
import { log } from "./log.mjs";
import { string_take_soft } from "./string_take_soft.mjs";
export function log_error(message) {
  let truncated = string_take_soft(message, 1000);
  let fn = log;
  log_error_generic(fn, truncated);
}
