import { bible_audio_download_divinerevelations_generic } from "./bible_audio_download_divinerevelations_generic.mjs";
export async function bible_audio_download_divinerevelations_esv() {
  let version = "english_standard_version_v2";
  return await bible_audio_download_divinerevelations_generic(version);
}
