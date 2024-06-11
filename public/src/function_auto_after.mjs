import { function_auto_return } from "./function_auto_return.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
export async function function_auto_after(function_name) {
  let r = await function_auto_return(function_name);
  let { after } = r;
  assert(string_is, [after]);
  return after;
}
