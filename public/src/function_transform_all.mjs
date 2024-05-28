import { function_transform_all_args } from "./function_transform_all_args.mjs";
export async function function_transform_all(lambda_name, args) {
  return await function_transform_all_args(lambda_name, "a");
}
