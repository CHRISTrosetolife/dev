import { string_ends_with } from "./string_ends_with.mjs";
import { list_map_path_parse_name } from "./list_map_path_parse_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { log } from "./log.mjs";
import { bible_audio_player_generic_multiple } from "./bible_audio_player_generic_multiple.mjs";
import { bible_audio_player_path } from "./bible_audio_player_path.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function bible_audio_player_language_copy(language_folder_name) {
  let p = bible_audio_player_path(language_folder_name);
  let folders = await folder_read_shallow(p, "");
  folders = list_filter(folders, function (f) {
    let v = !string_ends_with(f, ".zip");
    return v;
  });
  folders = list_map_path_parse_name(folders);
  log({
    p,
    folders,
  });
  await bible_audio_player_generic_multiple(p, folders);
}
