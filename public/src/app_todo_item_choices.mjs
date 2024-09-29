import { object_property_get } from "./object_property_get.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
import { app_todo_item_set_save } from "./app_todo_item_set_save.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function app_todo_item_choices(
  context,
  item,
  property_name,
  choices,
  choice_default,
) {
  let { root } = context;
  if (!object_property_exists(item, property_name)) {
    object_property_set(item, property_name, choice_default);
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
          await app_todo_item_set_save(item, property_name, choice, context);
          app_todo_item_type_choose_refresh();
        },
      );
      html_style_success_if(
        b,
        choice,
        object_property_get(item, property_name),
      );
    });
  }
}
