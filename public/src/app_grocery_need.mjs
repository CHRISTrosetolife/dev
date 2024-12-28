import { app_grocery_index_items } from "./app_grocery_index_items.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr_each } from "./html_hr_each.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
export function app_grocery_need(context) {
  let root = html_button_back_main(context, app_grocery_need);
  let items = app_grocery_index_items(context);
  html_hr_each(root, items, (item) => {
    let name = object_property_get(item, "name");
    html_button_width_full_text_click(root, name, () => {});
  });
}
