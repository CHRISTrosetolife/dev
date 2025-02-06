import { html_button } from "./html_button.mjs";
import { app_grocery_need } from "./app_grocery_need.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { app_grocery_items_list } from "./app_grocery_items_list.mjs";
export function app_grocery_main(context) {
  let root = html_clear_scroll_top_context(context);
  html_button(root, "items", () => {
    app_grocery_items_list(context);
  });
  html_button(root, "need", () => {
    app_grocery_need(context);
  });
}
