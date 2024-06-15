import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { window_open } from "./window_open.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_index() {
  let root = html_style_default_initialize();
  html_clear_scroll_top_centered(root);
  html_button_width_full_text_click(root, "learn code javascript", () => {
    window_open("learn_code.html");
  });
  html_button_width_full_text_click(root, "learn language cebuano", () => {
    window_open("ceb.html");
  });
  html_button_width_full_text_click(root, "resume", () => {
    window_open("resume.html");
  });
  html_button_width_full_text_click(root, "game", () => {
    window_open("gs.html");
  });
}
