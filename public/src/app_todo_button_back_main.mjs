import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
export function app_todo_button_back_main(context) {
  html_clear_scroll_top(root);
  let { root } = context;
  html_button_width_full_text_click_back(root, async () => {
    await app_todo_main(context);
  });
}
