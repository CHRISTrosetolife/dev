import { function_output_file_generic } from "./function_output_file_generic.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_output_file_string(function_name) {
  let lambda_file_overwrite = file_overwrite;
  return await function_output_file_generic(
    function_name,
    lambda_file_overwrite,
  );
}
