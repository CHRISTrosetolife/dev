import { app_language_2_recent_update } from "./app_language_2_recent_update.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_answer_delay } from "./app_language_2_answer_delay.mjs";
import { app_language_words_update } from "./app_language_words_update.mjs";
export async function app_language_2_on_answer(context, word, recent_count) {
  app_language_words_update(context);
  app_language_2_recent_update(
    context,
    questions_recent_stored,
    word,
    recent_count,
  );
  await app_language_2_answer_delay();
  await app_language_2_refresh_learn(context);
}
