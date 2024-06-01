import { function_transform_return } from "./function_transform_return.mjs";
export async function function_transform(lambda_names, function_name) {
  let { results } = await function_transform_return(
    lambda_names,
    function_name,
  );
  return results;
}
