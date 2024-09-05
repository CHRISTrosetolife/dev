import { path_parse_name } from "./path_parse_name.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow_folders_names } from "./folder_read_shallow_folders_names.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
export async function bible_audio_player_unzip() {
  let p = bible_audio_player_english_path();
  let zips = await folder_read_shallow(p, ".zip");
  let zip_names = list_map(zips, path_parse_name);
  return zip_names;
  let folder_names = await folder_read_shallow_folders_names(p);
  return folder_names;
}
