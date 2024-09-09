import { string_skip } from "./string_skip.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { log } from "./log.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function bible_audio_player_fcbh_starts_with(file_path, n) {
  let file_name = path_parse_base(file_path);
  let without_first = string_skip(file_name, 1);
  if (0) {
    log({
      file_name,
      p,
    });
  }
  let e = string_starts_with(without_first, n);
  return e;
}
