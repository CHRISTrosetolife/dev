import { tautology } from "./tautology.mjs";
import { bible_audio_player_generic } from "./bible_audio_player_generic.mjs";
import { each_async } from "./each_async.mjs";
import { folder_unzip } from "./folder_unzip.mjs";
export async function bible_audio_player_generic_multiple(p, folders) {
  await folder_unzip(p);
  await each_async(folders, async (download_folder) => {
    await bible_audio_player_generic(p, download_folder, tautology);
  });
}
