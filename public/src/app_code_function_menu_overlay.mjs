import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_overlay_container } from "./html_overlay_container.mjs";
import { app_code_function_selected_get } from "./app_code_function_selected_get.mjs";
export function app_code_function_menu_overlay(
  context,
  overlay,
  menu_refresh,
  button_text,
) {
  let function_selected = app_code_function_selected_get(context);
  let d = html_overlay_container(overlay, menu_refresh);
  html_p_text(
    d,
    string_combine_multiple([
      "Function: ",
      function_selected,
      " : ",
      button_text,
    ]),
  );
  return d;
}
