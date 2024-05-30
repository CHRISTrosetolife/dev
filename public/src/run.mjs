import { function_run } from "./function_run.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
export async function run() {
  let r = process_argv_remaining();
  let first = list_first(r);
  let remaining = list_skip(r, 1);
  return await function_run(first, remaining);
}
