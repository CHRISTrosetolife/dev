import { list_includes } from "./list_includes.mjs";
export function app_language_2_audio_play_should(language) {
  let v = list_includes(["tgl", "el", "en"], language);
  return v;
}
