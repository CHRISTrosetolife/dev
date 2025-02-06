import { html_button } from "./html_button.mjs";
import { app_todo_choices_initialize } from "./app_todo_choices_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
import { app_todo_item_set_save } from "./app_todo_item_set_save.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_todo_item_choices(context, item, property) {
  let { root } = context;
  let property_name = object_property_get(property, "name");
  let choices = object_property_get(property, "choices");
  app_todo_choices_initialize(item, property);
  let choices_div = html_div(root);
  app_todo_item_type_choose_refresh();
  function app_todo_item_type_choose_refresh() {
    html_clear(choices_div);
    each(choices, (choice) => {
      let b = html_button(choices_div, choice, async () => {
        await app_todo_item_set_save(item, property_name, choice, context);
        app_todo_item_type_choose_refresh();
      });
      html_style_success_if(
        b,
        choice,
        object_property_get(item, property_name),
      );
    });
  }
}
