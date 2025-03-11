import { html_button_noload } from "./html_button_noload.mjs";
import { html_div } from "./html_div.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag } from "./html_flag.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
export async function app_language_button_ready(root, f, language_fluent) {
  let quiz_container;
  let ready_container = html_div(root);
  let ready_above = html_div(ready_container);
  let button_ready = html_button_noload(ready_container, "", function () {
    html_style_display_none(ready_container);
    html_style_display_block(quiz_container);
  });
  html_flag(button_ready, f);
  html_span_text(
    button_ready,
    string_combine_multiple([
      " ",
      await app_language_refresh_quiz_text_ready(language_fluent),
    ]),
  );
  quiz_container = html_div(root);
  html_style_display_none(quiz_container);
  let v = {
    quiz_container,
    ready_above,
  };
  return v;
}
