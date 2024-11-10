import { each_async } from "./each_async.mjs";
import { bible_audio_download_divinerevelations_generic } from "./bible_audio_download_divinerevelations_generic.mjs";
export async function bible_audio_download_divinerevelations_esv() {
  let versions = ["english_standard_version_v2"];
  await each_async(versions, async (version) => {
    await bible_audio_download_divinerevelations_generic(version);
  });
}
