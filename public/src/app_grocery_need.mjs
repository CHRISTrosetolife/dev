import { app_grocery_main } from "./app_grocery_main.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { app_grocery_items } from "./app_grocery_items.mjs";
export function app_grocery_need(context) {
  html_button_back_main(context, app_grocery_main);
  let items = app_grocery_items(context);
}
