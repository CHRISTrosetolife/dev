import { bible_audio_download_mp3 } from "./bible_audio_download_mp3.mjs";
export async function bible_audio_download_divinerevelations_generic(version) {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  return bible_audio_download_mp3(prefix_url, version);
}
