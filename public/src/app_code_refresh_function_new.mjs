import { app_code_refresh_app_new_generic } from "./app_code_refresh_app_new_generic.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { app_prefix } from "./app_prefix.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_code_invoke } from "./app_code_invoke.mjs";
import { app_new } from "./app_new.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function app_code_refresh_function_new(context) {
  let fns_all = await functions_names();
  let prefix = app_prefix();
  let fns_prefixed = list_filter_starts_with(fns_all, prefix);
  let fns_without_prefix = list_map(fns_prefixed, function (f) {
    let v = string_prefix_without(f, prefix);
    return v;
  });
  if (false) {
    let existing = await app_code_invoke(fn_name("apps_list"));
  }
  let message = "not be the name of an existing app";
  let input_placeholder = "App name";
  let button_text = "New app";
  let function_this = fn_name("app_code_refresh_app_new");
  let conditions = list_concat(html_condition_identifier_fn_part(), [
    html_condition_includes_not(fns_without_prefix, message),
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
