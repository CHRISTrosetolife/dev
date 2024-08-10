import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
export async function repeat(lambda) {
  let success = false;
  while (!success) {
    try {
      await lambda();
      success = true;
    } catch (e) {
      await bible_interlinear_words_audio_upload_generic(
        words,
        alphabet,
        language_code,
      );
    }
  }
}
