import { app_language_2_reset_search } from "./app_language_2_reset_search.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { string_size } from "./string_size.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button_reset } from "./html_button_reset.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { html_button_back_text } from "./html_button_back_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
export function app_language_2_reset(context) {
  let { root } = context;
  app_language_2_button_back_home(context);
  html_p_text(
    root,
    "Reset will simulate this app. It will be as if you used the app, got all the questions correct up to a certain point. This can approximate picking up where you left off while using the app on another device or browser.",
  );
  html_p_text(
    root,
    string_combine_multiple([
      'If you do not want to reset, choose "',
      html_button_back_text(),
      '". Otherwise, type in the word you wish to reset to (you will choose the word after this): ',
    ]),
  );
  let search_input = html_input_width_full(root);
  let button_reset = html_button_reset(root, () => {
    let v = html_value_get(search_input);
    app_language_2_reset_search(context, v);
  });
  html_on_input_initial(search_input, () => {
    let v = html_value_get(search_input);
    v = string_trim_whitespace(v);
    let condition = string_size(v) >= 1;
    html_button_enable_if(button_reset, condition);
  });
}
