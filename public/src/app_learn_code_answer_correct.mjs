import { html_style_success } from "./html_style_success.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_units } from "./html_style_units.mjs";
import { html_style } from "./html_style.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_learn_code_answer_correct(container_bottom) {
  let p = html_p_text(container_bottom, "✅ Your answer is correct");
  html_style_success(p);
  html_style_rounded_padded(p);
  html_style(p, {
    padding: html_style_units(3.5),
  });
}
