import { html_font_register } from "./html_font_register.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { html_color_gray } from "./html_color_gray.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style_rounded_padded_style } from "./html_style_rounded_padded_style.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag_language } from "./html_flag_language.mjs";
import { html_style } from "./html_style.mjs";
export function app_language_2_word(parent, language, text, boxed) {
  let container = html_span(parent);
  let box = html_span(container);
  let color;
  if (boxed) {
    color = html_color_gray();
    html_style(box, html_style_rounded_padded_style());
  } else {
    color = "white";
  }
  html_style(box, {
    border: string_combine("solid 0.4dvh ", color),
  });
  html_flag_language(box, language);
  let text_span = html_span_text(
    container,
    string_combine_multiple([" ", text]),
  );
  if (language === "el") {
    html_font_register("font_name", "font/GentiumPlus-Regular");
  }
  html_style_bold(container);
  let result = {
    container,
  };
  object_merge_strict(result, {
    language,
    text,
  });
  return result;
}
