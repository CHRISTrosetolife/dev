import { app_todo_main } from "./app_todo_main.mjs";
import { app_button_back_main } from "./app_button_back_main.mjs";
import { app_todo_index_save } from "./app_todo_index_save.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_todo_item_name(
  context,
  button_text_first,
  button_text_second,
  value_initial,
  on_complete,
  on_save,
) {
  let app_main_lambda = app_todo_main;
  let { root } = context;
  html_button_width_full_text_click(root, button_text_first, () => {
    app_button_back_main(context, app_main_lambda);
    let input = html_input_width_full_focus(root);
    html_value_set(input, value_initial);
    html_button_width_full_text_click(root, button_text_second, async () => {
      let value = html_value_get(input);
      on_complete(value);
      await app_todo_index_save(context);
      on_save();
    });
  });
}
