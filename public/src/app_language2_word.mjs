import { html_style_rounded_padded_style } from "./html_style_rounded_padded_style.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag_language } from "./html_flag_language.mjs";
import { html_style } from "./html_style.mjs";
export function app_language2_word(body, language, rememeber, boxed) {
  let q = html_span(body);
  let box = html_span(q);
  if (boxed) {
    html_style(box, {
      border: "solid 0.25dvh black",
    });
    html_style(box, html_style_rounded_padded_style());
  }
  html_flag_language(box, language);
  html_span_text(q, string_combine_multiple([" ", rememeber]));
  html_style_bold(q);
}
