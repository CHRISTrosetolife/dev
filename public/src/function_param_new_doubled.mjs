import { function_param_new } from "./function_param_new.mjs";
export async function function_param_new_doubled(function_name, param_name) {
  await function_param_new(function_name, param_name, param_name);
}
