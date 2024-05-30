import { run_git } from "./public/src/run_git.mjs";
import { log } from "./public/src/log.mjs";
let result = await run_git();
log(result);
