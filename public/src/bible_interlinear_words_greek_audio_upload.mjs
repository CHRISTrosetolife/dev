import { bible_interlinear_words_greek_audio_upload_filter } from "./bible_interlinear_words_greek_audio_upload_filter.mjs";
import { language_code_greek } from "./language_code_greek.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let filter = bible_interlinear_words_greek_audio_upload_filter();
  let language_code = language_code_greek();
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_new,
    filter,
    language_code,
  );
}
