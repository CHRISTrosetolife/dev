import { generate_list_fn_name } from "./generate_list_fn_name.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names } from "./function_names.mjs";
export async function functions_list_generate() {
  await generate_list_fn_name(
    function_names,
    fn_name("functions_list_generate"),
  );
}
