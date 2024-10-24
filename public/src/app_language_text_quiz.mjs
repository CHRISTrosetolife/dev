import { app_language_text } from "./app_language_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_language_text_quiz(item, language_fluent) {
  return string_combine_multiple([
    "📝 quiz ( ",
    item.emoji,
    " ",
    await app_language_text(language_fluent, item.text),
    " )",
  ]);
}
