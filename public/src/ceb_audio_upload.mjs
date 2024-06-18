import { audio_upload } from "./audio_upload.mjs";
export async function ceb_audio_upload(text) {
  return await audio_upload("ceb", text);
}
