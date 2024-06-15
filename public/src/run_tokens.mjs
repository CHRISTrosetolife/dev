import { function_run } from "./function_run.mjs";
import { function_unalias } from "./function_unalias.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
export async function run_tokens(r) {
  let { first, remaining } = list_first_remaining(r);
  first = function_unalias(first);
  return await function_run(first, remaining);
}
