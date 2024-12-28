import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { app_grocery_items_list } from "./app_grocery_items_list.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_grocery_main(context) {
  let root = html_clear_scroll_top_context(context);
  html_button_width_full_text_click(root, "items", () => {
    app_grocery_items_list(context);
  });
  html_button_width_full_text_click(root, "need", () => {
    app_grocery_items_list(context);
  });
}
