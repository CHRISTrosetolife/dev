import { object_property_set } from "./object_property_set.mjs";
import { range } from "./range.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_grocery_index_need } from "./app_grocery_index_need.mjs";
import { app_grocery_index_items } from "./app_grocery_index_items.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr_each } from "./html_hr_each.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
export function app_grocery_need(context) {
  let root = html_button_back_main(context, app_grocery_need);
  let refresh = () => app_grocery_need(context);
  let items = app_grocery_index_items(context);
  let need = app_grocery_index_need(context);
  html_hr_each(root, items, (item) => {
    let name = object_property_get(item, "name");
    let count = object_property_initialize(index, name, 0);
    html_button_width_full_text_click(
      root,
      string_combine_multiple([name, ": ", count]),
      () => {
        html_button_back_main(context, refresh);
        html_hr_each(root, range(13), (item) => {
          let b = html_button_width_full_text_click(root, item, () => {
            object_property_set(object, "property_name", value);
          });
          html_style_success_if(b, count, item);
        });
      },
    );
  });
}
