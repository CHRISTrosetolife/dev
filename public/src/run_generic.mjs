import { log } from "./log.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export function run_generic() {
  Error.stackTraceLimit = Infinity;
  let result = fn();
  if (undefined_not_is(result)) {
    log(result);
  }
}
