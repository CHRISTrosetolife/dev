import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function function_new(function_name) {
  assert_arguments_size();
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
