import { path_parse_base_starts_with } from "./path_parse_base_starts_with.mjs";
export function bible_audio_player_fcbh_starts_with(file_path, n) {
  return path_parse_base_starts_with(file_path, n);
}
