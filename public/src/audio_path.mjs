import { audio_language_ceb } from "./audio_language_ceb.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
import { list_get } from "./list_get.mjs";
export function audio_path(voice_index, text) {
  let { language_code, voices } = audio_language_ceb();
  let { code } = list_get(voices, voice_index);
  let file_path = gcloud_audio_path(language_code, text, code);
  return file_path;
}
