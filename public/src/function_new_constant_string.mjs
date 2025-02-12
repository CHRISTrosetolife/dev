import { js_code_string } from "./js_code_string.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
export async function function_new_constant_string(f_name, value) {
  let open = true;
  await function_new_generic(
    f_name,
    "",
    js_code_statement_return(js_code_string(value)),
    open,
    [],
    false,
    false,
  );
}
