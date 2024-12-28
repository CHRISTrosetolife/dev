import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { app_grocery_items } from "./app_grocery_items.mjs";
export function app_grocery_need(context) {
  let root = html_button_back_main(context, app_grocery_need);
  let items = app_grocery_items(context);
  html_hr(root);
  each(items, (item) => {});
}
