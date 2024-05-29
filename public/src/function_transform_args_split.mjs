import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { function_import } from "./function_import.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_transform_args_split(
  lambda_names,
  function_name,
  args,
) {
  let split = string_split_comma(lambda_names);
  let mapped = await list_map_async(split, function_import);
  return await function_transform_args_split_lambda(
    function_name,
    mapped,
    args,
  );
}
