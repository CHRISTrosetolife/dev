import { app_learn_code_style_code_color_background } from "./app_learn_code_style_code_color_background.mjs";
import { html_style_pre_wrap } from "./html_style_pre_wrap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_learn_code_style_code_color } from "./app_learn_code_style_code_color.mjs";
import { app_learn_code_code_part } from "./app_learn_code_code_part.mjs";
export function app_learn_code_code_part_contrast(parent, code) {
  let component = app_learn_code_code_part(
    parent,
    code,
    app_learn_code_style_code_color_background(),
  );
  app_learn_code_style_code_color(component);
  html_style_margin_y(component, "0.5dvh");
  html_style_pre_wrap(component);
  return component;
}
