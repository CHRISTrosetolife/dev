import { files_rename_generic } from "./files_rename_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_import } from "./function_import.mjs";
export async function files_rename_map(
  input_path,
  file_extension,
  mapper_function_name,
) {
  assert_arguments_length(arguments, 3);
  let mapper = await function_import(mapper_function_name);
  await files_rename_generic(input_path, file_extension, mapper);
}
