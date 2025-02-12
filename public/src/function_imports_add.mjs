import { function_transform_command_line } from "./function_transform_command_line.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
export async function function_imports_add(function_name) {
  await function_transform_command_line(js_imports_add.name, function_name);
}
