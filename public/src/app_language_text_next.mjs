import { html_button_next_text } from "./html_button_next_text.mjs";
import { app_language_text } from "./app_language_text.mjs";
export async function app_language_text_next(language_fluent) {
  return await app_language_text(language_fluent, html_button_next_text());
}
