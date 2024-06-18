import { audio_language_ceb } from "./audio_language_ceb.mjs";
export function audio_language(language) {
  let choices = {
    ceb: () => audio_language_ceb(),
  };
}
