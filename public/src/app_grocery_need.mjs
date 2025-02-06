import { html_button } from "./html_button.mjs";
import { app_grocery_main } from "./app_grocery_main.mjs";
import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_grocery_firebase_path_index } from "./app_grocery_firebase_path_index.mjs";
import { firebase_save_index } from "./firebase_save_index.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { range } from "./range.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_grocery_index_need } from "./app_grocery_index_need.mjs";
import { app_grocery_index_items } from "./app_grocery_index_items.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr_each } from "./html_hr_each.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
export function app_grocery_need(context) {
  let root = html_button_back_main(context, app_grocery_main);
  let refresh = () => app_grocery_need(context);
  let items = app_grocery_index_items(context);
  let need = app_grocery_index_need(context);
  html_hr_each(root, items, (item) => {
    let name = object_property_get(item, "name");
    let count = object_property_initialize(need, name, 0);
    html_button(root, string_combine_multiple([name, ": ", count]), () => {
      html_button_back_main(context, refresh);
      html_hr_each(root, range(13), (c) => {
        let b = html_button(root, c, async () => {
          object_property_set(need, name, c);
          await save_refresh();
        });
        html_style_success_if(b, count, c);
      });
    });
  });
  html_hr(root);
  html_button(root, "clear", async () => {
    each(items, (item) => {
      let name = object_property_get(item, "name");
      object_property_set(need, name, 0);
    });
    await save_refresh();
  });
  async function save_refresh() {
    let index_path = app_grocery_firebase_path_index();
    await firebase_save_index(context, index_path);
    refresh();
  }
}
