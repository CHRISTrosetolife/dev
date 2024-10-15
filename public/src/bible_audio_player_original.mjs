import { file_copy_closed } from "./file_copy_closed.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { folder_read_shallow_names } from "./folder_read_shallow_names.mjs";
import { bible_audio_player_path } from "./bible_audio_player_path.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
export async function bible_audio_player_original() {
  let name = "greek";
  let p = bible_audio_player_path(name);
  let folders = await folder_read_shallow_names(p, "");
  await bible_audio_player_generic_multiple(p, folders);
  let file_path_new = file_copy_path(file_path, output_directory);
  await file_copy_closed(from, to_mapped);
}
