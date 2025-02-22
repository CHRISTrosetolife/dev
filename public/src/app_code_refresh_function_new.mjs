import { html_condition_number_starts_with_not } from "./html_condition_number_starts_with_not.mjs";
import { app_code_refresh_app_new_generic } from "./app_code_refresh_app_new_generic.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_new } from "./app_new.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_code_refresh_function_new(context) {
  let existing = await functions_names();
  let message = "not be the name of an existing function";
  let input_placeholder = "Function name";
  let button_text = "New function";
  let function_this = fn_name("app_code_refresh_function_new");
  let conditions = list_concat(html_condition_identifier_fn_part(), [
    html_condition_number_starts_with_not(),
    html_condition_includes_not(existing, message),
  ]);
  let on_submit = app_new;
  app_code_refresh_app_new_generic(
    context,
    function_this,
    input_placeholder,
    conditions,
    button_text,
    on_submit,
  );
}
