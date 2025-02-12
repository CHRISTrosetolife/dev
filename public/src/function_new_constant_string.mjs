import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log_error } from "./log_error.mjs";
import { function_open } from "./function_open.mjs";
import { function_exists } from "./function_exists.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_new_constant_string(f_name, value) {
  comment(fn_name("function_new_generic"), " might overwrite a function");
  if (await function_exists(f_name)) {
    await function_open(f_name);
    log_error(string_combine_multiple(["already exists: ", f_name]));
    let v;
    return v;
  }
  let open = true;
  await function_new_generic(f_name, "", "", open, [], false, false);
}
