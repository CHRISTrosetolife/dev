import { path_join } from "./path_join.mjs";
export function bible_audio_player_path(name) {
  return path_join(["..\\bible", name]);
}
