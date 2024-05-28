import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { each } from "./each.mjs";
import { noop } from "./noop.mjs";
export function app_dev() {
  let root = html_style_default_initialize();
  let screens = app_dev_screens();
  each(screens, (s) => {
    let b = html_button_width_full_text_click(root, "", noop);
    s.name(b);
  });
}
