import { storage_url } from "./storage_url.mjs";
import { audio_path } from "./audio_path.mjs";
import { string_replace } from "./string_replace.mjs";
export async function storage_url_audio(language, count, text) {
  let file_path = await audio_path(language, count, text);
  file_path = string_replace(file_path, "%20", "%2520");
  let url = storage_url(file_path);
  return url;
}
