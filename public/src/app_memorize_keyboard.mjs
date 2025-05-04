import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { html_button_element } from "./html_button_element.mjs";
import { app_memorize_on_keydown } from "./app_memorize_on_keydown.mjs";
import { app_memorize_button_keyboard_stylize } from "./app_memorize_button_keyboard_stylize.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_div } from "./html_div.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { number_to_dvh } from "./number_to_dvh.mjs";
import { html_style } from "./html_style.mjs";
import { html_element } from "./html_element.mjs";
import { app_memorize_keyboard_height } from "./app_memorize_keyboard_height.mjs";
export function app_memorize_keyboard(context) {
  let keyboard_height = app_memorize_keyboard_height(context);
  let { root } = context;
  let keyboard_element = html_element(root, "div");
  html_style(keyboard_element, {
    "max-height": number_to_dvh(keyboard_height),
  });
  let keys = keyboard_keys_rows();
  for (let row of keys) {
    let row_element = html_div(keyboard_element);
    html_style_centered(row_element);
    for (let k of row) {
      let b = html_button_element(row_element);
      object_property_set(context.keyboard_buttons, k, b);
      html_inner_set(b, string_case_upper(k));
      app_memorize_button_keyboard_stylize(context, b);
      html_on_click_noload(b, async function () {
        await app_memorize_on_keydown(context, k);
      });
    }
  }
}
