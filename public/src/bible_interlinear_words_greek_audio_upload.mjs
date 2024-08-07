import { audio_path } from "./audio_path.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
import { list_take } from "./list_take.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let to = "el";
  let words = await bible_interlinear_words_greek();
  let mapped = list_map(words, string_case_lower);
  return await audio_path();
  return list_take(mapped, 10);
}
