import { each_async } from "./each_async.mjs";
import { folder_read_shallow_names } from "./folder_read_shallow_names.mjs";
import { folder_read_shallow_folders_bases } from "./folder_read_shallow_folders_bases.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
export async function bible_audio_player_unzip() {
  let p = bible_audio_player_english_path();
  let extension = ".zip";
  let zip_names = await folder_read_shallow_names(p, extension);
  let folder_names = await folder_read_shallow_folders_bases(p);
  await each_async(zip_names, async (zip_name) => {});
  return zip_names;
}
