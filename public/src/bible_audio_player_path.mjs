import { folder_external_root } from "./folder_external_root.mjs";
import { bible_audio_player_drive_letter } from "./bible_audio_player_drive_letter.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_player_path(name) {
  let drive_letter = bible_audio_player_drive_letter();
  let v = path_join([folder_external_root("bible"), name]);
  return v;
}
