import { number_to_dvh } from "./number_to_dvh.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_margin_default } from "./html_style_margin_default.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { number_to_dvw } from "./number_to_dvw.mjs";
export function app_memorize_button_keyboard_stylize(context, b) {
  let b_width = number_to_dvw(8);
  html_style_centered(b);
  html_style_margin_default(b);
  html_style(b, {
    "font-size": "3.8dvh",
    "min-width": b_width,
    "max-width": b_width,
    height: number_to_dvh(context.button_height - 0.6),
  });
}
