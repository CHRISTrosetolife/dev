import { audio_voices_ceb } from "./audio_voices_ceb.mjs";
import { ceb_audio_language_code } from "./ceb_audio_language_code.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
import { list_get } from "./list_get.mjs";
export function ceb_audio_path(voice_index, text) {
  let language_code = ceb_audio_language_code();
  let voices = audio_voices_ceb();
  let { code } = list_get(voices, voice_index);
  let file_path = gcloud_audio_path(language_code, text, code);
  return file_path;
}
