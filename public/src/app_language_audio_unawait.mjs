import { app_language_audio } from "./app_language_audio.mjs";
import { unawait } from "./unawait.mjs";
export function app_language_audio_unawait(language, text) {
  return unawait(async () => await app_language_audio(language, text));
}
