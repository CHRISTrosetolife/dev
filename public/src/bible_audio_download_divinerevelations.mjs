import { bible_audio_download_divinerevelations_versions } from "./bible_audio_download_divinerevelations_versions.mjs";
import { identity } from "./identity.mjs";
import { bible_audio_download_mp3_multiple } from "./bible_audio_download_mp3_multiple.mjs";
export async function bible_audio_download_divinerevelations() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let versions = bible_audio_download_divinerevelations_versions();
  await bible_audio_download_mp3_multiple(
    prefix_url,
    versions,
    identity,
    identity,
  );
}
