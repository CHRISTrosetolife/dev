import { html_overlay } from "./html_overlay.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_button_reset } from "./html_button_reset.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button } from "./html_button.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_todo_list_filtered } from "./app_todo_list_filtered.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_todo_completed_view } from "./app_todo_completed_view.mjs";
import { app_todo_index_save_main } from "./app_todo_index_save_main.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_todo_daily } from "./app_todo_daily.mjs";
import { app_todo_type } from "./app_todo_type.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { app_todo_completed_value } from "./app_todo_completed_value.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { each } from "./each.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_todo_main(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  html_button(root, app_todo_completed_value(), function () {
    app_todo_completed_view(context);
  });
  html_button(root, "🌅 add dailies", async function () {
    let filtered = list_filter_property(
      items,
      app_todo_type(),
      app_todo_daily(),
    );
    each(filtered, function (item) {
      object_property_set(
        item,
        app_todo_completed_property(),
        app_todo_not_completed(),
      );
    });
    await app_todo_index_save_main(context);
  });
  html_item_add(
    context,
    app_todo_main,
    app_todo_firebase_path_index(),
    on_complete,
  );
  function on_complete(value) {
    let items = app_todo_items(context);
    app_todo_item_add(items, value);
  }
  let refresh = function () {
    let v = app_todo_main(context);
    return v;
  };
  app_todo_list_filtered(
    context,
    items,
    app_todo_completed_property(),
    app_todo_not_completed(),
    refresh,
  );
  html_hr(root);
  html_button_reset(root, "Delete all items", function () {
    let o = html_overlay(fn_name("app_todo"));
  });
}
