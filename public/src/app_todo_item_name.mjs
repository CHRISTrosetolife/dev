import { app_todo_items } from "./app_todo_items.mjs";
import { app_todo_index_save_main } from "./app_todo_index_save_main.mjs";
import { app_todo_item } from "./app_todo_item.mjs";
import { list_add } from "./list_add.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { app_todo_button_back_main } from "./app_todo_button_back_main.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_todo_item_name(
  context,
  button_text_first,
  button_text_second,
) {
  let { root } = context;
  html_button_width_full_text_click(root, button_text_first, () => {
    app_todo_button_back_main(context);
    let input = html_input_width_full_focus(root);
    html_button_width_full_text_click(root, button_text_second, async () => {
      let value = html_value_get(input);
      let items = app_todo_items(context);
      list_add(items, app_todo_item(value));
      await app_todo_index_save_main(context);
    });
  });
}
