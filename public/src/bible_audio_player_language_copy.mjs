import { log } from "./log.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
import { bible_audio_player_path } from "./bible_audio_player_path.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function bible_audio_player_language_copy(language_folder_name) {
  let p = bible_audio_player_path(language_folder_name);
  let folders = await folder_read_shallow(p, "");
  log({
    p,
    folders,
  });
  await bible_audio_player_generic_multiple(p, folders);
}
