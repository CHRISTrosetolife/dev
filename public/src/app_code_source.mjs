import { app_learn_code_style_code_color } from "./app_learn_code_style_code_color.mjs";
import { html_style_border_width } from "./html_style_border_width.mjs";
import { app_learn_code_style_code_color_background } from "./app_learn_code_style_code_color_background.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function app_code_source(parent, statement) {
  let unparsed = js_unparse(statement);
  let s = html_span_text(parent, unparsed);
  html_style_monospace(s);
  html_style_background_color(
    parent,
    app_learn_code_style_code_color_background(),
  );
  html_style_border_width(parent, 0);
  app_learn_code_style_code_color(s);
}
