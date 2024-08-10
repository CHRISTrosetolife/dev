import { repeat } from "./repeat.mjs";
import { bible_interlinear_words } from "./bible_interlinear_words.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { string_filter } from "./string_filter.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_interlinear_words_audio_upload_generic(
  books_get,
  alphabet_get,
  language_code,
) {
  let alphabet = alphabet_get();
  let words = await bible_interlinear_words(books_get);
  let m1 = list_map(words, string_case_lower);
  let lambda = (character) => string_includes(alphabet, character);
  let m2 = list_map(m1, (word) => string_filter(word, lambda));
  let chunks = list_chunk(m2, 20);
  await repeat(() => {});
  try {
  } catch (e) {
    await bible_interlinear_words_audio_upload_generic(
      words,
      alphabet,
      language_code,
    );
  }
}
