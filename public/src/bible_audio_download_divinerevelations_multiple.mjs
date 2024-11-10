import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_download_divinerevelations_generic } from "./bible_audio_download_divinerevelations_generic.mjs";
export async function bible_audio_download_divinerevelations_multiple() {
  let versions = [
    "english_standard_version_v2",
    "english_new_revised_standard_version_drama",
    "english_contemporary_english_version_drama",
  ];
  await each_async(versions, async (version) => {
    let r = await bible_audio_download_divinerevelations_generic(version);
    log({
      r,
    });
  });
}
