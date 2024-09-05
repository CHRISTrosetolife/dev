import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
export async function bible_audio_player_unzip() {
  let p = bible_audio_player_english_path();
  let zips = await folder_read_shallow(p, ".zip");
  let all = await folder_read_shallow(p, "");
}
