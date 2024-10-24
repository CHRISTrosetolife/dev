import { app_language_text_group } from "./app_language_text_group.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { app_language_text } from "./app_language_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_language_text_group_next(language_fluent) {
  return string_combine_multiple([
    await app_language_text(language_fluent, html_button_next_text()),
    app_language_text_group(),
  ]);
}
