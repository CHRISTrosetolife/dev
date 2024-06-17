import { function_transform_args_return } from "./function_transform_args_return.mjs";
export async function function_transform_args(
  lambda_names,
  function_name,
  args,
) {
  let r = await function_transform_args_return(
    lambda_names,
    function_name,
    args,
  );
  let { results } = r;
  return results;
}
