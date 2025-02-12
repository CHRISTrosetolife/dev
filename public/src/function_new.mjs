import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function function_new(function_name) {
  assert_arguments_length(arguments, 1);
  let open = true;
  await function_new_generic(
    function_name,
    "",
    "",
    open,
    [],
    false,
    file_write,
  );
}
