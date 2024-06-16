import { run_git } from "./public/src/run_git.mjs";
import { log } from "./public/src/log.mjs";
import { undefined_not_is } from "./public/src/undefined_not_is.mjs";
let fn = run_git;
Error.stackTraceLimit = Infinity;
let result = await fn();
if (undefined_not_is(result)) {
  log(result);
}
