import { log_write } from "./log_write.mjs";
import { log_error_generic } from "./log_error_generic.mjs";
export function log_error_write(message) {
  log_error_generic(log_write, message);
}
