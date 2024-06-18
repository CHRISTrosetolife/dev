import { audio_voices_ceb } from "./audio_voices_ceb.mjs";
export function audio_language_ceb() {
  let voices = audio_voices_ceb();
  return {
    language_code: "fil-PH",
    voices: [
      {
        code: "Standard-D",
        male: true,
      },
      {
        code: "Standard-A",
        male: false,
      },
      {
        code: "Standard-C",
        male: true,
      },
      {
        code: "Standard-B",
        male: false,
      },
    ],
  };
}
