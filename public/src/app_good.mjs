import { grace_good_generic } from "./grace_good_generic.mjs";
import { each } from "./each.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  let messages = ["morning", "night"];
  each(messages, (message) => {
    html_button_width_full_text_click(body, message, () => {
      let message = grace_good_generic(message);
      clipboard_copy_web(message);
    });
  });
}
