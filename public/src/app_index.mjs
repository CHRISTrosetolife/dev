import { html_button_me_email } from "./html_button_me_email.mjs";
import { app_index_choices_buttons } from "./app_index_choices_buttons.mjs";
import { app_index_choices } from "./app_index_choices.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_index() {
  let root = html_style_default_initialize();
  html_clear_scroll_top_centered(root);
  html_button_me_email(root);
  let choices = app_index_choices();
  app_index_choices_buttons(root, choices);
}
