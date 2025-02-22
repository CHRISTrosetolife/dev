import { app_code_function_names } from "./app_code_function_names.mjs";
import { html_condition_identifier_fn } from "./html_condition_identifier_fn.mjs";
import { function_new } from "./function_new.mjs";
import { app_code_refresh_app_new_generic } from "./app_code_refresh_app_new_generic.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_code_refresh_function_new(context) {
  let existing = await app_code_function_names();
  let message = "not be the name of an existing function";
  let input_placeholder = "Function name";
  let button_text = "New function";
  let function_this = fn_name("app_code_refresh_function_new");
  let conditions = list_concat(
    html_condition_identifier_fn(),
    html_condition_includes_not(existing, message),
  );
  let on_submit = async function (name) {
    let v = await function_new(name);
    return v;
  };
  app_code_refresh_app_new_generic(
    context,
    function_this,
    input_placeholder,
    conditions,
    button_text,
    on_submit,
  );
}
