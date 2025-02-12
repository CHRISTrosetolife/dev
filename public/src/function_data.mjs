import { fn_name } from "./fn_name.mjs";
import { function_transform_command_line } from "./function_transform_command_line.mjs";
export async function function_data(function_name) {
  await function_transform_command_line(fn_name("js_data"), function_name);
}
