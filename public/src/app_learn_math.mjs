import { app_learn_math_main } from "./app_learn_math_main.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_learn_math() {
  let root = html_style_default_initialize();
  html_clear_scroll_top_centered(root);
  app_learn_math_main(root);
}
