import { object_property_get } from "./object_property_get.mjs";
import { function_transform_args_return } from "./function_transform_args_return.mjs";
export async function function_transform_args_command_line(
  lambda_names,
  function_name,
  args,
) {
  let r = await function_transform_args_return(
    lambda_names,
    function_name,
    args,
  );
  let v = object_property_get(r, "results");
  return v;
}
