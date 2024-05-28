import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { string_slashes_escape } from "./string_slashes_escape.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { log } from "./log.mjs";
import { data_functions } from "./data_functions.mjs";
import { each_object } from "./each_object.mjs";
import { string_is } from "./string_is.mjs";
import { each } from "./each.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function functions_string_prefix_to_constant(
  prefix,
  constant_name,
) {
  for (let i of [prefix, constant_name]) {
    assert(string_is, [i]);
  }
  let fp = function_name_to_path(constant_name);
  if (!(await file_exists(fp))) {
    let code = js_code_return(string_delimit(string_slashes_escape(prefix)));
    await function_new_generic(
      constant_name,
      "",
      code,
      false,
      [],
      false,
      file_write,
    );
  }
  let functions = await data_functions();
  each_object(functions, (function_name, details) => {
    let { literals } = details;
    each(literals, (literal) => {
      if (string_is(literal)) {
        if (string_starts_with(literal, prefix)) {
          function_transform_args_split;
          log({
            function_name,
          });
        }
      }
    });
  });
}
