import { html_style_monospace } from "./html_style_monospace.mjs";
import { app_learn_code_code_background_set } from "./app_learn_code_code_background_set.mjs";
import { app_learn_code_style_code_color } from "./app_learn_code_style_code_color.mjs";
export function html_style_code_dark(textarea) {
  app_learn_code_style_code_color(textarea);
  html_style_monospace(textarea);
  app_learn_code_code_background_set(textarea);
}
