import { function_code } from "./function_code.mjs";
import { list_first } from "./list_first.mjs";
export async function app_dev_sandbox_command_line_result_remaining_first_function(
  fn_result,
  remaining,
) {
  let function_name_choice = list_first(remaining);
  let result = await function_code(function_name_choice);
  return result;
}
