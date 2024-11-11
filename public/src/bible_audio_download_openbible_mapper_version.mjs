import { string_suffix_without } from "./string_suffix_without.mjs";
export function bible_audio_download_openbible_mapper_version(name) {
  return string_suffix_without(name, "_books");
}
