import { audio_language } from "./audio_language.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
import { list_get } from "./list_get.mjs";
export function audio_path(language, voice_index, text) {
  let { language_code, voices } = audio_language("language");
  let { code } = list_get(voices, voice_index);
  let file_path = gcloud_audio_path(language_code, text, code);
  return file_path;
}
