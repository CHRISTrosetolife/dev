import { app_todo_items } from "./app_todo_items.mjs";
import { noop } from "./noop.mjs";
import { app_todo_completed_value } from "./app_todo_completed_value.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_todo_completed_view(root, context) {
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  html_button_width_full_text_click(
    root,
    app_todo_not_completed(),
    async () => {
      app_todo_main(context);
    },
  );
  app_todo_list(
    context,
    items,
    app_todo_completed_property(),
    app_todo_completed_value(),
    noop,
  );
}
