import { audio_voices_ceb } from "./audio_voices_ceb.mjs";
export function audio_language_ceb() {
  let voices = audio_voices_ceb();
  return {
    language_code: "fil-PH",
    voices,
  };
}
