import { ceb_audio_voices } from "./ceb_audio_voices.mjs";
import { ceb_audio_language_code } from "./ceb_audio_language_code.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
import { list_get } from "./list_get.mjs";
export function ceb_audio_path(voice_index, text) {
  let language_code = ceb_audio_language_code();
  let voices = ceb_audio_voices();
  let voice = list_get(voices, voice_index);
  let file_path = gcloud_audio_path(language_code, text, voice);
  return {
    file_path,
    language_code,
    voice,
  };
}
