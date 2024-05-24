import { storage_url } from "./storage_url.mjs";
import { html_audio } from "./html_audio.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
export async function app_ceb_audio(cebuano) {
  let file_path = ceb_audio_path(0, cebuano);
  return await html_audio(storage_url(file_path));
}
