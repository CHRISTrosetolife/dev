import { html_button_run_message } from "./html_button_run_message.mjs";
import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { html_option_text } from "./html_option_text.mjs";
import { list_add } from "./list_add.mjs";
import { html_on_change } from "./html_on_change.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_select } from "./html_select.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { app_dev_sandbox_result_error } from "./app_dev_sandbox_result_error.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { log } from "./log.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { app_dev_sandbox_result } from "./app_dev_sandbox_result.mjs";
import { html_button_run } from "./html_button_run.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_textarea_code } from "./html_textarea_code.mjs";
import { function_read } from "./function_read.mjs";
import { each } from "./each.mjs";
import { app_dev_sandbox_message } from "./app_dev_sandbox_message.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_dev_sandbox_function_multiple(
  root,
  multiple_is,
  function_name,
  try_out_message,
  run_message,
  run_click,
) {
  html_hr(root);
  html_style_alternate_monospace_short(
    root,
    string_combine_multiple([app_dev_sandbox_message(), try_out_message, " :"]),
  );
  let select;
  let function_name_choices = [];
  if (multiple_is) {
    list_add(function_name_choices, function_name);
    select = html_select(root);
    html_style_button_default(select);
    html_style_width_full(select);
    html_on_change(select, async () => {
      let select_value = html_value_get(select);
      await textarea_change(select_value);
    });
    each(function_name_choices, (fn) => {
      html_option_text(select, fn);
    });
  }
  let textarea = html_textarea_code(root);
  html_attribute_set(textarea, "rows", 7);
  let b = html_button_run(root, on_click, run_message(function_name));
  await textarea_change(function_name);
  html_on_change(textarea, textarea_save);
  let result_component = app_dev_sandbox_result(root);
  async function textarea_change(fn_name) {
    let value_initial = await function_read(fn_name);
    html_value_set(textarea, value_initial);
    html_clear(b);
    html_style_alternate_monospace_short_span(
      b,
      html_button_run_message(run_message(fn_name)),
    );
  }
  async function on_click() {
    try {
      await textarea_save();
      let selected = function_name_get();
      let r = await run_click(selected);
      log({
        r,
      });
      let f = list_first(r);
      if (object_property_exists(f, "function_names_new")) {
        let function_names_new = object_property_get(f, "function_names_new");
        each(function_names_new, (fn) => {
          if (list_includes_not(function_name_choices, fn)) {
            list_add(function_name_choices, fn);
            html_option_text(select, fn);
          }
        });
      }
      let value_new = await function_read(selected);
      html_value_set(textarea, value_new);
    } catch (e) {
      log({
        e,
      });
      app_dev_sandbox_result_error(result_component, e);
    }
  }
  return {
    textarea,
  };
  async function textarea_save() {
    let selected = function_name_get(select, function_name_get());
    let file_path = function_name_to_path(selected);
    let value = html_value_get(textarea);
    await file_overwrite(file_path, value);
  }
  function function_name_get() {
    let selected;
    if (multiple_is) {
      selected = html_value_get(select);
    } else {
      selected = function_name;
    }
    return selected;
  }
}
