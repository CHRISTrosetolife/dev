import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { function_name_generated_combine } from "./function_name_generated_combine.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { html_code_generate_parent } from "./html_code_generate_parent.mjs";
import { html_code_generate } from "./html_code_generate.mjs";
export async function html_code_generate_generic(
  tag_name,
  input,
  fn_caller,
  name,
) {
  let body_string = await html_code_generate(tag_name, input);
  let fn_new_name = function_name_generated_combine(fn_caller, name);
  let open = false;
  await function_new_generic_code(
    fn_new_name,
    html_code_generate_parent(),
    body_string,
    open,
    [],
    false,
    false,
  );
  return function_names_to_lookup([fn_new_name]);
}
