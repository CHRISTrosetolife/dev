import { storage_url } from "./storage_url.mjs";
import { audio_path } from "./audio_path.mjs";
export async function storage_url_audio(language, count, text) {
  let file_path = await audio_path(language, count, text);
  let url = storage_url(file_path);
  return url;
}
