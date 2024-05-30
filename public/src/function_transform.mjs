import { function_transform_return } from "./function_transform_return.mjs";
export async function function_transform(lambda_names, function_name) {
  let args = arguments;
  await function_transform_return(args, lambda_names, function_name);
}
