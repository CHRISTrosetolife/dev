import { function_run } from "./function_run.mjs";
export async function function_run_arg(name, root) {
  return await function_run(name, [root]);
}
