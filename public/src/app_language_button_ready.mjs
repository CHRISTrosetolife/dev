import { html_div } from "./html_div.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag } from "./html_flag.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_language_button_ready(root, f, language_fluent) {
  let quiz_container;
  let button_ready = html_button_width_full_text_click(root, "", () => {
    html_style_display_none(button_ready);
    html_style_display_block(quiz_container_get());
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
  return button_ready;
}
