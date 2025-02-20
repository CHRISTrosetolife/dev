import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_new(function_name) {
  assert_arguments_length(arguments, 1);
  let open = true;
  await function_new_generic_code(
    function_name,
    "",
    "",
    open,
    [],
    false,
    false,
  );
}
