import { path_join } from "./path_join.mjs";
export function bible_audio_player_english_path() {
  let name = "english";
  return path_join(["..\\bible", name]);
}
