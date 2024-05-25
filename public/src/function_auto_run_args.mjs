import { function_run } from "./function_run.mjs";
import { function_auto } from "./function_auto.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_auto_run_args(function_name, args_string) {
  let args = string_split_comma(args_string);
  await function_auto(function_name);
  return await function_run(function_name, args);
}
