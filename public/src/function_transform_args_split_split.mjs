import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { function_import } from "./function_import.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function function_transform_args_split_split(
  lambda_names,
  function_name,
  args,
) {
  let mapped = await list_map_async(lambda_names, function_import);
  return await function_transform_args_split_lambda(
    function_name,
    mapped,
    args,
  );
}
