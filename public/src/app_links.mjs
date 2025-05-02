import { app_prefix_combine } from "./app_prefix_combine.mjs";
import { apps_list } from "./apps_list.mjs";
import { app_index_choices_buttons } from "./app_index_choices_buttons.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_map } from "./list_map.mjs";
export function app_links() {
  let body = html_style_default_initialize();
  let choices = list_map(apps_list(), function (p) {
    let v = {
      text: p,
      app: app_prefix_combine(p),
    };
    return v;
  });
  app_index_choices_buttons(body, choices);
}
