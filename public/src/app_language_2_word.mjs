import { html_style_font_family_register } from "./html_style_font_family_register.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_font_family } from "./html_style_font_family.mjs";
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
import { html_style_font_color } from "./html_style_font_color.mjs";
export function app_language_2_word(parent, language, text, boxed, context) {
  let { language_learn } = context;
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
    html_font_register("GentiumPlus-Regular", "font/GentiumPlus-Regular");
    html_style_font_family(text_span, "GentiumPlus-Regular");
    html_style_font_size_default_multiplied(text_span, 1.2);
  } else if (language === "he") {
    html_style_font_family_register("SILEOT", text_span);
    html_style_font_size_default_multiplied(text_span, 1.2);
  }
  if (language === language_learn) {
    html_style_font_color(text_span, "darkblue");
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
