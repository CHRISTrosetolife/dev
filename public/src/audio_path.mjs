import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { audio_language } from "./audio_language.mjs";
import { gcloud_audio_path } from "./gcloud_audio_path.mjs";
import { list_get } from "./list_get.mjs";
export async function audio_path(language, voice_index, text) {
  assert_arguments_length(arguments, 3);
  let { language_code, voices } = await audio_language(language);
  let { code } = list_get(voices, voice_index);
  let file_path = gcloud_audio_path(language_code, text, code);
  return file_path;
}
