import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
export function gcloud_audio_path(language_code, text, voice) {
  return string_combine_multiple([
    "audio/",
    language_code,
    "/",
    string_encoded_to(text),
    "/",
    voice,
    ".mp3",
  ]);
}
