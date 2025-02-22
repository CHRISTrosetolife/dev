import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { app_code_refresh_function } from "./app_code_refresh_function.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export async function app_code_refresh_function_change(context, function_name) {
  assert(never, []);
  storage_local_set_context(context, "function_selected", function_name);
  await app_code_refresh_function(context);
}
