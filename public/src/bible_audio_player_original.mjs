import { folder_read_shallow_names } from "./folder_read_shallow_names.mjs";
import { bible_audio_player_path } from "./bible_audio_player_path.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
export async function bible_audio_player_original() {
  let name = "greek";
  let p = bible_audio_player_path(name);
  let folders = await folder_read_shallow_names(p, "");
  await bible_audio_player_generic_multiple(p, folders);
}
