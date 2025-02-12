import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { js_data } from "./js_data.mjs";
export async function function_data(function_name) {
  await function_transform_command_line(js_data.name, function_name);
}
