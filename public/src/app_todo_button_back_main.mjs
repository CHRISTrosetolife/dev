import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
export function app_todo_button_back_main(context) {
  let app_main_lambda = app_todo_main;
  let { root } = context;
  html_clear_scroll_top(root);
  html_button_back(root, async () => {
    await app_todo_main(context);
  });
}
