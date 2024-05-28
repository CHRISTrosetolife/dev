import { function_names } from "./function_names.mjs";
import { function_transform_args } from "./function_transform_args.mjs";
export async function function_transform_all_args(lambda_name, args) {
  let function_names_result = await function_names();
  for (let function_name of function_names_result) {
    await function_transform_args(lambda_name, function_name, args);
  }
}
