import { list_is } from "./list_is.mjs";
import { function_auto_return } from "./function_auto_return.mjs";
import { assert } from "./assert.mjs";
export async function function_auto_results(function_name) {
  let r = await function_auto_return(function_name);
  let { results } = r;
  assert(list_is, [results]);
  return results;
}
