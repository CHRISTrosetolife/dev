import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_audio_player_drive_letter } from "./bible_audio_player_drive_letter.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_player_path(name) {
  let drive_letter = bible_audio_player_drive_letter();
  let v = path_join([
    string_combine_multiple([drive_letter, ":"]),
    "..\\bible",
    name,
  ]);
  return v;
}
