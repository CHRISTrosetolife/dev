import { function_params } from "./function_params.mjs";
export async function function_wrap(function_name, function_name_wrapped) {
  let params = await function_params(function_name);
}
