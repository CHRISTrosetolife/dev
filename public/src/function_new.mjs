import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log_error } from "./log_error.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_open } from "./function_open.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function function_new(function_name) {
  assert_arguments_length(arguments, 1);
  comment(fn_name("function_new_generic"), " might overwrite a function");
  if (await function_exists(function_name)) {
    await function_open(function_name);
    log_error(string_combine_multiple(["already exists: ", function_name]));
    return;
  }
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
