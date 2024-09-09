import { string_starts_with } from "./string_starts_with.mjs";
import { log } from "./log.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
export function bible_audio_player_fcbh_starts_with(file_path, n) {
  let prefix = "B";
  let file_name = path_parse_base(file_path);
  let p = prefix + n;
  if (0) {
    log({
      file_name,
      p,
    });
  }
  let e = string_starts_with(file_name, p);
  return e;
}
