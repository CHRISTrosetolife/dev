import { function_run } from "./function_run.mjs";
export async function function_output_file(function_name) {
  let result = await function_run(function_name, []);
}
