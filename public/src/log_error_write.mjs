import { log_error_generic } from "./log_error_generic.mjs";
import { log } from "./log.mjs";
export function log_error_write(message) {
  let fn = log;
  log_error_generic(fn, message);
}
