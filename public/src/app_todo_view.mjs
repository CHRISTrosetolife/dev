import { html_button } from "./html_button.mjs";
import { app_todo_list_filtered } from "./app_todo_list_filtered.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
import { noop } from "./noop.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_todo_view(context, value) {
  let { root } = context;
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  html_button(root, app_todo_not_completed(), async function () {
    app_todo_main(context);
  });
  app_todo_list_filtered(
    context,
    items,
    app_todo_completed_property(),
    value,
    noop,
  );
}
