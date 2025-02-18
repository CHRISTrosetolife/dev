import { function_param_move_index } from "./function_param_move_index.mjs";
export async function function_param_move_beginning(function_name) {
  await function_param_move_index(function_name, 0, 1);
}
