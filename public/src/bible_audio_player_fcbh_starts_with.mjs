import { path_parse_base_starts_with } from "./path_parse_base_starts_with.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function bible_audio_player_fcbh_starts_with(file_path, n) {
  let file_name = path_parse_base_starts_with(file_path);
  let e = string_starts_with(without_first, n);
  return e;
}
