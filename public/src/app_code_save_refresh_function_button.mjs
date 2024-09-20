import { html_inner_set } from "./html_inner_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_code_save_refresh } from "./app_code_save_refresh.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_save_refresh_function_button(
  parent,
  root,
  function_name,
) {
  let d = html_button_width_full_text_click(parent, "", async () => {
    await app_code_save_refresh(root, (save) =>
      object_property_set(save, "function", function_name),
    );
  });
  html_inner_set(d, function_name);
}
