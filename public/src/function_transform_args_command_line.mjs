import { function_transform_args_return } from "./function_transform_args_return.mjs";
export async function function_transform_args_command_line(
  lambda_names,
  function_name,
  args,
) {
  await function_transform_args_return(lambda_names, function_name, args);
}
