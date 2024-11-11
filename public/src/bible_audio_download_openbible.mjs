import { bible_audio_download_openbible_mapper_version } from "./bible_audio_download_openbible_mapper_version.mjs";
import { bible_audio_download_openbible_versions } from "./bible_audio_download_openbible_versions.mjs";
import { bible_audio_download_mp3_multiple } from "./bible_audio_download_mp3_multiple.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function bible_audio_download_openbible() {
  let prefix_url = "https://openbible.com/audio/";
  let versions = bible_audio_download_openbible_versions();
  await bible_audio_download_mp3_multiple(
    prefix_url,
    versions,
    (name) => string_prefix_without(name, "BSB_"),
    bible_audio_download_openbible_mapper_version,
  );
}
