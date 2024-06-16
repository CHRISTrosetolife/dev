import { log } from "./log.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
export async function run_generic(fn) {
  Error.stackTraceLimit = Infinity;
  let result = await fn();
  if (undefined_not_is(result)) {
    log(result);
  }
}
