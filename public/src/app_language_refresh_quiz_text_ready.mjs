import { app_language_text } from "./app_language_text.mjs";
export async function app_language_refresh_quiz_text_ready(language_fluent) {
  return "👌 " + (await app_language_text(language_fluent, "Ready"));
}
