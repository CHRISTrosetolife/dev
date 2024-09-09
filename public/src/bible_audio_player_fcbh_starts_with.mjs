import { string_starts_with } from "./string_starts_with.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function bible_audio_player_fcbh_starts_with(file_path, n) {
  let file_name = path_parse_base(file_path);
  let e = string_starts_with(file_name, "B" + n);
  return e;
}
