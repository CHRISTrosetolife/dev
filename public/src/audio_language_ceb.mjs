import { audio_voices_ceb } from "./audio_voices_ceb.mjs";
import { ceb_audio_language_code } from "./ceb_audio_language_code.mjs";
export function audio_language_ceb() {
  let language_code = ceb_audio_language_code();
  let voices = audio_voices_ceb();
  return {
    language_code: "fil-PH",
    voices,
  };
}
