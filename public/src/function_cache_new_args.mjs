import { function_declaration } from "./function_declaration.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
import { function_data } from "./function_data.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { file_write } from "./file_write.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function function_cache_new_args(function_name, args_string) {
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
  list_map_property(params, "limit");
  let split = string_split_comma(args_string);
  let cache_name = function_cache_name(function_name);
  await function_new_generic(
    cache_name,
    args_string,
    js_code_statement_return(
      js_code_await(
        js_code_call_args(fn_name("function_cache"), [
          function_name,
          js_code_array(split),
        ]),
      ),
    ),
    false,
    [],
    true,
    file_write,
  );
  await function_data(cache_name);
  return {
    cache_name,
  };
}
