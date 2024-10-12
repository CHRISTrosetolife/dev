import { grace_good_morning } from "./grace_good_morning.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  html_button_width_full_click(body, "morning", () => {
    grace_good_morning();
  });
}
