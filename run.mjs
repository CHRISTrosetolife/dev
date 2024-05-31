import { run } from "./public/src/run.mjs";
import { log } from "./public/src/log.mjs";
let result = await run();
log(result);
