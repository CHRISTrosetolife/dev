import { app_index_choices_buttons } from "./app_index_choices_buttons.mjs";
import { apps_paths } from "./apps_paths.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_map } from "./list_map.mjs";
export async function app_links() {
  let body = html_style_default_initialize();
  let choices = list_map(await apps_paths(), (p) => ({}));
  app_index_choices_buttons(root, choices);
}
