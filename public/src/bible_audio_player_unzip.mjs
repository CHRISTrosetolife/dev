import { path_parse_base } from "./path_parse_base.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_shallow_folders } from "./folder_read_shallow_folders.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
export async function bible_audio_player_unzip() {
  let p = bible_audio_player_english_path();
  let zips = await folder_read_shallow(p, ".zip");
  let folders = await folder_read_shallow_folders(p);
  let names = list_map(folders, path_parse_base);
  return names;
}
