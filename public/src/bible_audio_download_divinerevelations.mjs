import { bible_audio_download_mp3_multiple } from "./bible_audio_download_mp3_multiple.mjs";
export async function bible_audio_download_divinerevelations() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let versions = [
    "english_standard_version_v2",
    "english_new_revised_standard_version_drama",
    "english_contemporary_english_version_drama",
  ];
  await bible_audio_download_mp3_multiple(versions, prefix_url);
}
