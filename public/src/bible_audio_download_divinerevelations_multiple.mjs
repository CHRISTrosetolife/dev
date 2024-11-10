import { bible_audio_download_mp3 } from "./bible_audio_download_mp3.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_download_divinerevelations_multiple() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let versions = [
    "english_standard_version_v2",
    "english_new_revised_standard_version_drama",
    "english_contemporary_english_version_drama",
  ];
  await each_async(versions, async (version) => {
    let r = await bible_audio_download_mp3(prefix_url, version);
    log({
      r,
    });
  });
}
