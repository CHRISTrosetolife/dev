import { log } from "./log.mjs";
import { function_cache_new } from "./function_cache_new.mjs";
import { function_run } from "./function_run.mjs";
export async function function_cache_new_run(function_name) {
  let r = await function_cache_new(function_name);
  log(r);
  let { cache_name } = r;
  return await function_run(cache_name, []);
}
