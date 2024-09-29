import { app_todo_index_save } from "./app_todo_index_save.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_todo_item } from "./app_todo_item.mjs";
import { string_is } from "./string_is.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
import { list_add } from "./list_add.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_todo_main(context) {
  let { root, index } = context;
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  html_button_width_full_text_click(root, "➕ add", () => {
    html_clear_scroll_top(root);
    html_button_width_full_text_click_back(root, async () => {
      await app_todo_main(context);
    });
    let input = html_input_width_full_focus(root);
    html_button_width_full_text_click(root, "➕ add", async () => {
      let value = html_value_get(input);
      list_add(items, app_todo_item(value));
      await app_todo_index_save(context);
      await app_todo_main(context);
    });
  });
  html_hr(root);
  each(items, (item) => {
    if (string_is(item)) {
      item = app_todo_item(item);
    }
    html_button_width_full_text_click(
      root,
      object_property_get(item, "name"),
      () => {
        html_clear_scroll_top(root);
        let ot = "one-time";
        let choices = [ot, "daily"];
        if (!object_property_exists(item, "type")) {
          object_property_set(item, "type", ot);
        }
        let choices_div = html_div(root);
        app_todo_item_type_choose_refresh();
        function app_todo_item_type_choose_refresh() {
          html_clear(choices_div);
          each(choices, (choice) => {
            let b = html_button_width_full_text_click(
              choices_div,
              choice,
              async () => {
                object_property_set(item, "type", choice);
                await app_todo_index_save(context);
                app_todo_item_type_choose_refresh();
              },
            );
            html_style_success_if(b, choice, object_property_get(item, "type"));
          });
        }
      },
    );
  });
}
