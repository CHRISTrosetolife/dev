import { js_code_call } from "./js_code_call.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_declarations_unparse } from "./function_declarations_unparse.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
export async function app_code_invoke(f_name) {
  await app_code_files_get();
  let f_source = await function_declarations_unparse([f_name]);
  let combined = string_combine_multiple([f_source, js_code_call(f_name)]);
  let existing = eval(combined);
  return existing;
}
