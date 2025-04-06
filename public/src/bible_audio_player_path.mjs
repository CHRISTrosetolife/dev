import { folder_external_root } from "./folder_external_root.mjs";
import { path_join } from "./path_join.mjs";
export function bible_audio_player_path(name) {
  let v = path_join([folder_external_root("bible"), name]);
  return v;
}
