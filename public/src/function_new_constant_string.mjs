import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
export async function function_new_constant_string(f_name, value) {
  let open = false;
  let { contents } = await function_new_generic_code(
    f_name,
    "",
    js_code_statement_return(js_code_string(value)),
    open,
    [],
    false,
    false,
  );
  return contents;
}
