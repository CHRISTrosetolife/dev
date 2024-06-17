import { log } from "./log.mjs";
import { function_names } from "./function_names.mjs";
import { function_transform_args } from "./function_transform_args.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_transform_all_args(lambda_name, args) {
  assert_arguments_length(arguments, 2);
  let function_names_result = await function_names();
  for (let function_name of function_names_result) {
    log({
      function_name,
    });
    await function_transform_args(lambda_name, function_name, args);
  }
}
